
import express, { Express } from 'express';
import winston from 'winston';
import { webhookRouter } from './routes/webhook';
import { config } from './config';

const logger = winston.createLogger({
  level: config.isProduction ? 'error' : 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

const app: Express = express();

app.use(express.json());
app.use('/webhook', webhookRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Unhandled error', { error: err.message, stack: err.stack });
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = config.port;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
