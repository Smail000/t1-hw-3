import { Request, Response, NextFunction } from 'express';

/**
 * Middleware для обработки ошибок
 * @param error - Объект ошибки
 * @param req - Express request объект
 * @param res - Express response объект
 * @param next - Express next функция
 */
export const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    console.error(error.stack);
    res.status(500).json({ message: 'Internal server error' });
};
