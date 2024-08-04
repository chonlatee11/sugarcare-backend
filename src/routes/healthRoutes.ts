import { Elysia } from 'elysia';

export const healthzRoutes = new Elysia({ prefix: '/healthz' }).get(
  '',
  async () => {
    return { status: 'UP', db: 'CONNECTED' };
  },
);
