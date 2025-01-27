
// TypeScript definitions for Gmail API webhook payloads
export type Message = {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  headers: {
    name: string;
    value: string;
  }[];
  payload: {
    mimeType: string;
    text: string;
  };
};

export type Label = {
  id: string;
  name: string;
  type: string;
};

export type GmailNotification = {
  email: string;
  historyId: string;
  labels: Label[];
  messages: Message[];
  secret: string;
  timestamp: number;
};

export type WebhookPayload = {
  event: string;
  data: string;
  created: number;
  email: string;
  message: Message;
};
