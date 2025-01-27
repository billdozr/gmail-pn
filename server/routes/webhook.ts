
import { Router } from 'express';
import { verifyWebhook } from '../middleware/auth';
import { GmailNotification } from '../types';
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

export const webhookRouter = Router();

webhookRouter.post('/', verifyWebhook, (req, res) => {
  try {
    const notification: GmailNotification = req.body;
    logger.info('Received webhook notification', {
      email: notification.email,
      historyId: notification.historyId,
    });
    
    // Process the notification payload here
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    logger.error('Failed to process webhook', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
