import { pino } from 'pino';
import { env } from './env.js';

export const getLogger = (name: string) =>
  pino({
    name,
    level: env.LOG_LEVEL,
    base: null,
    nestedKey: 'data',
  });
