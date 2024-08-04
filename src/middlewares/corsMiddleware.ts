import { Elysia } from 'elysia';
import cors from '@elysiajs/cors';

export const applyCors = (app: Elysia): void => {
  app.use(cors());
};
