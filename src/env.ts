import * as dotenv from '@dotenvx/dotenvx';
import { cleanEnv, num, str } from 'envalid';

dotenv.config();
export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'production'],
    default: 'production',
  }),
  LOG_LEVEL: str({ default: 'info' }),
});
