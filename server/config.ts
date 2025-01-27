
import dotenv from 'dotenv';
import { envVar, isBoolean, isInt, isString } from 'env-var';

dotenv.config();

export const config = {
  port: isInt(process.env.PORT).required().asInt(),
  googleServiceAccountKey: isString(process.env.GOOGLE_SERVICE_ACCOUNT_KEY).required().asString(),
  targetEmail: isString(process.env.TARGET_EMAIL).required().asString(),
  isProduction: isBoolean(process.env.NODE_ENV).default(false).asBoolean(),
};
