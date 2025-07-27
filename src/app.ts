import tasksRouter from '@/routes/tasks.routes';
import express from 'express';

// Функция для инициализации приложения
const createApp = () => {
    const app = express();

    // Middleware для json
    app.use(express.json());

    // Routes
    app.use('/tasks', tasksRouter);

    return app;
};

export default createApp();
