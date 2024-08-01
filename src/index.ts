import Server from './config/server';

const server = new Server();
server.start().catch(error => {
    console.error('Failed to start server:', error);
});
