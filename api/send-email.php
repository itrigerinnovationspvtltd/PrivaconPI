<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$requiredFields = ['name', 'phone', 'email', 'subject', 'message'];
foreach ($requiredFields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Field $field is required"]);
        exit;
    }
}

// Sanitize input
$name = filter_var(trim($input['name']), FILTER_SANITIZE_STRING);
$phone = filter_var(trim($input['phone']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$subject = filter_var(trim($input['subject']), FILTER_SANITIZE_STRING);
$message = filter_var(trim($input['message']), FILTER_SANITIZE_STRING);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Email configuration
$to = "itrigerinnovations@gmail.com"; // Recipient email address
$subject = "New Lead Form Submission - Privacon Investigations";

// Email body
$emailBody = "
<html>
<head>
  <style>
    body { font-family: Arial; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: auto; padding: 20px; }
    .header { background: #DBB189; color: white; padding: 20px; text-align: center; }
    .content { background: #f7f7f7; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #8e7054; }
    .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #8e7054; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'><h2>New Lead Submission</h2></div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Name:</div>
        <div class='value'>".htmlspecialchars($name)."</div>
      </div>

      <div class='field'>
        <div class='label'>Email:</div>
        <div class='value'>".htmlspecialchars($email)."</div>
      </div>

      <div class='field'>
        <div class='label'>Phone:</div>
        <div class='value'>".htmlspecialchars($phone)."</div>
      </div>
      <div class='field'>
        <div class='label'>Subject:</div>
        <div class='value'>".htmlspecialchars($subject)."</div>
      </div>

      <div class='field'>
        <div class='label'>Message:</div>
        <div class='value'>".nl2br(htmlspecialchars($message))."</div>
      </div>
    </div>
  </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Privacon Investigations <noreply@batonrougehomeinspector.com>" . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later.'
    ]);
}
?>

