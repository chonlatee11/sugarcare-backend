import { Elysia } from 'elysia';
import helmet from '@elysiajs/bearer';

export const applyHelmet = (app: Elysia): void => {
  app.use(helmet());
};
