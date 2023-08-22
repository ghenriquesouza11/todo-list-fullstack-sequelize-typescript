import { Request, Response } from 'express';
import taskServices from '../services/task.services';

const createTask = async (req: Request, res: Response) => {
    const task = req.body;

    const {status, data} = await taskServices.createTask(task);

    return res.status(status).json({insertedId: data.id});
};

const getAllTasks = async (_req: Request, res: Response) => {
    const {status, data} = await taskServices.getAllTasks();

    return res.status(status).json(data);
};

const updtadeTask = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {title, status} = req.body;
    const task = {id: parseInt(id), title, status};

    const createdTask = await taskServices.updateTask(task);

    return res.status(createdTask.status).json(createdTask.data);
};

const deleteTask = async (req: Request, res: Response) => {
    const {id} = req.params;

    const {status, data} = await taskServices.deleteTask(parseInt(id));

    return res.status(status).json(data);
};

export = {
    createTask,
    getAllTasks,
    updtadeTask,
    deleteTask,
};
