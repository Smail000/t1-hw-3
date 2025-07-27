import { Router } from 'express';
import TasksController from '@/controllers/tasks.controller';

/**
 * Пути для управления задачами
 */
const tasksRouter = Router();

// GET /tasks - Получение всех задач
tasksRouter.get('/', TasksController.getTasks);

// GET /tasks/:id - Получение задачи по идентификатору
tasksRouter.get('/:id', TasksController.getTaskById);

// POST /tasks - Создание новой задачи
tasksRouter.post('/', TasksController.createTask);

// PATCH /tasks/:id - Обновление задачи по идентификатору
tasksRouter.patch('/:id', TasksController.updateTask);

// DELETE /tasks/:id - Удаление задачи по идентификатору
tasksRouter.delete('/:id', TasksController.deleteTask);

export default tasksRouter;
