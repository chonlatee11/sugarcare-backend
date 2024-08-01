import Elysia from 'elysia';
import {config} from './config';
import { db } from './db';
import { sql } from 'drizzle-orm' 
import { applyCors } from '../middlewares/corsMiddleware';
import { applyHelmet } from '../middlewares/helmetMiddleware';

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

        // Add your routes here
        this.app.get('/health', async () => {
            return { status: 'UP', db: 'CONNECTED' };
        });
    }

    private async checkDatabaseConnection(): Promise<void> {
        try {
            // Use Drizzle's query method correctly
            await db.execute(sql`SELECT 1`);
            console.log('Database connection established');
        } catch (error) {
            console.error('Database connection error:', error);
            process.exit(1);  // Exit the process with a failure code
        }
    }

    public async start(): Promise<void> {
        await this.checkDatabaseConnection();
        this.app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });
    }
}

export default Server;
