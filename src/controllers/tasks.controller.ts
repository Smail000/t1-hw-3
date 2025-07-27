import { Request, Response } from 'express';
import TasksService from '@/services/tasks.service';
import { Task, TaskData } from '@/types/task.types';

/**
 * Контроллер для обработки http запросов к сервису задач
 */
class TasksController {
    /**
     * Получить все задачи
     * @param req - Express request объект
     * @param res - Express response объект
     */
    public getTasks(req: Request, res: Response) {
        try {
            const tasks = TasksService.getAllTasks();
            res.status(200).json({ data: tasks });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching tasks' });
        }
    }

    /**
     * Получение задачи по идентификатору
     * @param req - Express request объект с идентификатором задачи
     * @param res - Express response объект
     */
    public getTaskById(req: Request, res: Response) {
        try {
            const taskId = parseInt(req.params.id, 10);
            const task = TasksService.getTask(taskId);

            if (task === null) {
                return res.status(404).json({ message: 'Task not found' });
            }

            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching task' });
        }
    }

    /**
     * Создание новой задачи
     * @param req - Express request объект с данными задачи в теле
     * @param res - Express response объект
     */
    public createTask(req: Request, res: Response) {
        try {
            const taskData: TaskData = req.body;
            const newTask = TasksService.createTask(taskData);
            res.status(201).json({ id: newTask.id, createdDate: newTask.createdDate });
        } catch (error) {
            res.status(500).json({ message: 'Error creating task' });
        }
    }

    /**
     * Изменение задачи
     * @param req - Express request объект с идентификатором в параметрах
     * @param res - Express response объект
     */
    public updateTask(req: Request, res: Response) {
        try {
            const taskId = parseInt(req.params.id, 10);
            const taskData: TaskData = req.body;

            const updatedTask = TasksService.updateTask(taskId, taskData);

            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }

            res.status(200).send();
        } catch (error) {
            res.status(500).json({ message: 'Error updating task' });
        }
    }

    /**
     * Удаление задачи
     * @param req - Express request объект с идентификатором в параметрах
     * @param res - Express response объект
     */
    public deleteTask(req: Request, res: Response) {
        try {
            const taskId = parseInt(req.params.id, 10);
            const success = TasksService.deleteTask(taskId);

            if (!success) {
                return res.status(404).json({ message: 'Task not found' });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task' });
        }
    }
}

export default new TasksController();