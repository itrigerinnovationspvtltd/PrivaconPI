# Email API Setup Instructions

## PHP Email Endpoint Setup

This PHP file handles email sending from the lead form.

### Configuration Steps:

1. **Update Email Address**
   - Open `api/send-email.php`
   - Find the line: `$to = "your-email@example.com";`
   - Replace with your actual email address

2. **Server Setup Options**

   **Option A: Using XAMPP/WAMP (Windows)**
   - Place the `api` folder in your `htdocs` (XAMPP) or `www` (WAMP) directory
   - Access via: `http://localhost/api/send-email.php`

   **Option B: Using PHP Built-in Server**
   ```bash
   cd api
   php -S localhost:8000
   ```
   - Access via: `http://localhost:8000/send-email.php`

   **Option C: Production Server**
   - Upload the `api` folder to your web server
   - Update the API endpoint in `src/config/api.js` to your production URL

3. **Update Frontend API URL**
   - Open `src/config/api.js`
   - Update `SEND_EMAIL` URL to match your server setup
   - Or set environment variable `VITE_API_URL` in `.env` file

### Environment Variables (Optional)

Create a `.env` file in the root directory:
```
VITE_API_URL=http://localhost/api/send-email.php
```

### Testing

You can test the endpoint using curl:
```bash
curl -X POST http://localhost/api/send-email.php \
  -H "Content-Type: application/json" \
  -d '{"Name":"Test User","Phone":"1234567890","Email":"test@example.com","ZipCode":"12345","Message":"Test message"}'
```

### Security Notes

- The current setup allows CORS from any origin (for development)
- For production, update the CORS headers in `send-email.php` to restrict access
- Consider adding rate limiting and CAPTCHA for production use
- Validate and sanitize all inputs (already implemented)

### Troubleshooting

- **Email not sending**: Check PHP `mail()` function is configured on your server
- **CORS errors**: Ensure CORS headers are properly set in PHP file
- **404 errors**: Verify the API endpoint URL matches your server setup

