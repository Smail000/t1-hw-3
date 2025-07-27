import { Task, TaskData } from '@/types/task.types';

/**
 * Сервис для обработки задач
 */
class TasksService {
    private tasks: Map<number, Task> = new Map();
    private tasksCounter = 0;

    /**
     * Получение всех задач
     * @returns Массив задач
     */
    public getAllTasks() {
        return Array.from(this.tasks.values());
    }

    /**
     * Получение задачи по идентификатору
     * @param taskId - Идентификатор задачи
     * @returns Задача или null
     */
    public getTask(taskId: number): Task | null {
        return this.tasks.get(taskId) || null;
    }

    /**
     * Создание задачи
     * @param taskData - Данные задачи
     * @returns Созданная задача
     */
    public createTask(taskData: TaskData) {
        const newTask: Task = {
            ...taskData,
            tags: { ...taskData.tags },
            id: this.tasksCounter,
            createdDate: Date.now(),
        };

        this.tasks.set(this.tasksCounter++, newTask);
        return newTask;
    }

    /**
     * Обновление задачи
     * @param taskId - Идентификатор задачи, которую нужно обновить
     * @param taskData - Данные для обновления
     * @returns Если задача обновлена корректно, то true, иначе false
     */
    public updateTask(taskId: number, taskData: TaskData): boolean {
        const oldTask = this.getTask(taskId);
        if (oldTask === null) return false;

        const updatedTask: Task = {
            ...taskData,
            tags: { ...taskData.tags },
            id: oldTask.id,
            createdDate: oldTask.createdDate,
        };

        this.tasks.set(taskId, updatedTask);
        return true;
    }

    /**
     * Удаление задачи
     * @param taskId - Идентификатор задачи
     * @returns Если задача удалена корректно, то true, иначе false
     */
    public deleteTask(taskId: number): boolean {
        const taskToBeDeleted = this.getTask(taskId);
        if (taskToBeDeleted === null) return false;
        this.tasks.delete(taskId);
        return true;
    }
}

export default new TasksService();
