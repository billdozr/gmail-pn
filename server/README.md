
# Gmail Webhook Server

A production-ready Express server for handling Gmail API push notifications.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file using the example:
   ```bash
   cp .env.example .env
   ```
4. Generate required keys and update .env with appropriate values

## Configuration

The server uses the following environment variables:

- `PORT`: Port to listen on (default: 3000)
- `WEBHOOK_SECRET`: Secret for validating webhook requests
- `GOOGLE_JWT_KEY`: Google JWT key for verifying signatures

## Running the Server

```bash
npm start
```

## Deployment

1. Use a reverse proxy (e.g., NGINX) in production
2. Set up HTTPS
3. Configure logging and monitoring
4. Implement proper error handling and retries

## Testing

1. Use ngrok to expose the server to the internet:
   ```bash
   ngrok http 3000
   ```
2. Configure your Gmail API webhook with the ngrok URL

## Security Considerations

- Always verify the Google-Signature header
- Use proper JWT verification
- Implement rate limiting
- Use HTTPS in production
