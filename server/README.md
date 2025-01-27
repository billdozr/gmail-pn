
# Gmail Webhook Server

A production-ready Express server for handling Gmail API push notifications.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file using the example provided in `.env.example`
4. Configure your Gmail API push notifications to point to your server's webhook endpoint

## Configuration

The server uses the following environment variables:

- `PORT`: The port to listen on (default: 3000)
- `GOOGLE_SERVICE_ACCOUNT_KEY`: Your Google service account private key
- `TARGET_EMAIL`: The email address to monitor
- `NODE_ENV`: Environment mode (production/development)

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Configure your Gmail API to send push notifications to:
   ```
   http://your-domain.com/webhook
   ```

## Security

- Webhook requests are verified using Google's JWT signature
- All requests are logged with Winston
- Proper error handling and 500 responses

## Development

1. Run in development mode:
   ```bash
   NODE_ENV=development npm start
   ```
2. Use a tool like ngrok to expose your local server for testing

## Monitoring

- All requests and errors are logged in JSON format
- Use your preferred monitoring solution to track the logs
