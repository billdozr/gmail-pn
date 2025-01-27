
import { Request, Response } from "express";
import { Notification } from "./types";
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export const handleWebhook = async (req: Request, res: Response) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const notification: Notification = req.body;
    logger.info("Received webhook notification", { notification });

    switch (notification.event_type) {
      case "message_delivered":
        handleDelivered(notification);
        break;
      case "message_read":
        handleRead(notification);
        break;
      case "message_marked_as_spam":
        handleMarkedAsSpam(notification);
        break;
      case "message_moved":
        handleMoved(notification);
        break;
      case "message_deleted":
        handleDeleted(notification);
        break;
      default:
        logger.warn("Unknown event type", { event_type: notification.event_type });
        return res.status(400).json({ error: "Unknown event type" });
    }

    res.status(200).json({ status: "ok" });
  } catch (error) {
    logger.error("Webhook processing failed", { error });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

function handleDelivered(notification: Notification) {
  // Implement delivery handling logic
  logger.info("Message delivered", { message_id: notification.message_id });
}

function handleRead(notification: Notification) {
  // Implement read handling logic
  logger.info("Message read", { message_id: notification.message_id });
}

function handleMarkedAsSpam(notification: Notification) {
  // Implement spam handling logic
  logger.info("Message marked as spam", { message_id: notification.message_id });
}

function handleMoved(notification: Notification) {
  // Implement move handling logic
  logger.info("Message moved", { 
    message_id: notification.message_id,
    new_label: notification.new_label,
    old_label: notification.old_label 
  });
}

function handleDeleted(notification: Notification) {
  // Implement delete handling logic
  logger.info("Message deleted", { message_id: notification.message_id });
}
