// API Configuration
// Production domain: losangelesmurphybeds-tmb.com
// For local development, set VITE_API_URL in .env file

export const API_ENDPOINTS = {
  SEND_EMAIL: import.meta.env.VITE_API_URL || 'https://batonrougehomeinspector.com/api/send-email.php'
};

