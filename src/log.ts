import { pino } from 'pino';

export const getLogger = (name: string) =>
  pino({
    name,
    level: process.env?.LOG_LEVEL ?? 'info',
    base: null,
    nestedKey: 'data',
  });
