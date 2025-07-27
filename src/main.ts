import app from './app';

const PORT = Number(process.env.PORT) || 3000;
const MODE = process.env.NODE_ENV || 'development';
const HOSTNAME = MODE === 'development' ? '127.0.0.1' : '0.0.0.0';

// Функция запуска севрера
const startServer = () => {
    app.listen(PORT, HOSTNAME, () => {
        console.log(
            `Сервер TasksAPI доступен по адресу http://localhost:${PORT}/`,
        );
    });
};

startServer();
