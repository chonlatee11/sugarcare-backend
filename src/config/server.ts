import Elysia from 'elysia';
import { config } from './config';
import { db } from './db';
import { sql } from 'drizzle-orm';
import { applyCors } from '../middlewares/corsMiddleware';
import { applyHelmet } from '../middlewares/helmetMiddleware';
import routes from '../routes';

class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
    this.config();
  }

  private config(): void {
    // Apply middlewares
    applyCors(this.app);
    applyHelmet(this.app);
    // Use routes
    this.app.use(routes);
  }

  private async checkDatabaseConnection(): Promise<void> {
    try {
      // Use Drizzle's query method correctly
      await db.execute(sql`SELECT 1`);
      console.info('Database connection established');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Connection To Database Error : ${error.message}`);
      } else {
        console.error(`Error : ${error}`);
      }
      process.exit(1); // Exit the process with a failure code
    }
  }

  public async start(): Promise<void> {
    await this.checkDatabaseConnection();
    this.app.listen(config.port, () => {
      console.info(`Server running on port ${config.port}`);
    });
  }
}

export default Server;
