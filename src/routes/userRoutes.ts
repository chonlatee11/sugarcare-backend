import { Elysia } from 'elysia';

export const userRoutes = new Elysia({ prefix: '/user' })
  .post('/sign-in', () => 'Sign in')
  .post('/sign-up', () => 'Sign up')
  .post('/profile', () => 'Profile');
