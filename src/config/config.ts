export interface Config {
  port: number;
  cors: {
    origin: string;
    methods: string;
  };
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
}

export const config: Config = {
  port: parseInt(Bun.env.PORT || '3000', 10),
  cors: {
    origin: Bun.env.CORS_ORIGIN || '*',
    methods: Bun.env.CORS_METHODS || 'GET,POST,PUT,DELETE',
  },
  db: {
    host: Bun.env.DB_HOST || 'localhost',
    port: parseInt(Bun.env.DB_PORT || '5432', 10),
    user: Bun.env.DB_USER || 'user',
    password: Bun.env.DB_PASSWORD || 'password',
    database: Bun.env.DB_NAME || 'database',
  },
};
