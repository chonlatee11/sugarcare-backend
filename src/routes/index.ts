import { Elysia } from 'elysia';
import { userRoutes } from './userRoutes';
import { healthzRoutes } from './healthRoutes';

const routes = new Elysia().use(userRoutes).use(healthzRoutes);

export default routes;
