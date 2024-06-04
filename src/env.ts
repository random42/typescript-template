import * as dotenv from 'dotenv';
import { cleanEnv, str, num } from 'envalid';

dotenv.config();
export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'] }),
  LOG_LEVEL: str({ default: 'info' }),
});
