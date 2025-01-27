
import express, { Express } from "express";
import { config } from "./config";
import { authenticateWebhook } from "./middleware/auth";
import { handleWebhook } from "./routes/webhook";
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export const createServer = (): Express => {
  const app = express();
  
  // Middleware
  app.use(express.json());
  app.use(authenticateWebhook);

  // Routes
  app.post("/webhook", handleWebhook);

  // Error handling middleware
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error("Server error", { error: err.message });
    res.status(500).json({ error: "Internal Server Error" });
  });

  return app;
};

if (require.main === module) {
  const app = createServer();
  const port = config.PORT;

  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
}
