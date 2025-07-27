import express from 'express';

// Функция для инициализации приложения
const createApp = () => {
    const app = express();

    // Middleware для json
    app.use(express.json());

    return app;
};

export default createApp();
