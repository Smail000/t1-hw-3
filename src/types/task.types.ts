import z from "zod";

export type TaskCategory = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";
export type TaskStatus = "ToDo" | "In Progress" | "Done";
export type TaskPriority = "Low" | "Medium" | "High";

export const TaskCategoryArray = ["Bug", "Feature", "Documentation", "Refactor", "Test"] as const;
export const TaskStatusArray = ["ToDo", "In Progress", "Done"] as const;
export const TaskPriorityArray = ["Low", "Medium", "High"] as const;

export const TaskCategorySchema = z.enum(TaskCategoryArray);
export const TaskStatusSchema = z.enum(TaskStatusArray);
export const TaskPrioritySchema = z.enum(TaskPriorityArray);


export type Task = {
    id: number,                 // идентификатор задачи
    title: string,              // название задачи
    description?: string,       // описание задачи
    tags: {                     // теги задачи
        category: TaskCategory, // категория задачи
        status: TaskStatus,     // статус задачи
        priority: TaskPriority  // приоритет задачи
    },
    createdDate: number         // дата создания (timestamp)
}

export type TaskData = {
    title: string,              // название задачи
    description?: string,       // описание задачи
    tags: {                     // теги задачи
        category: TaskCategory, // категория задачи
        status: TaskStatus,     // статус задачи
        priority: TaskPriority  // приоритет задачи
    }
}

export const TaskDataSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.object({
        category: TaskCategorySchema,
        status: TaskStatusSchema,
        priority: TaskPrioritySchema,
    }),
});