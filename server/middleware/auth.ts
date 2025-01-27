
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { config } from './config';

export const verifyWebhook = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.get('X-Goog-Signature') as string;
    verify(token, config.googleServiceAccountKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid signature' });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to verify signature' });
  }
};
