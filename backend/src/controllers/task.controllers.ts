import { Request, Response } from 'express';
import taskServices from '../services/task.services';

const createTask = async (req: Request, res: Response) => {
    const task = req.body;

    const {status, data} = await taskServices.createTask(task);

    return res.status(status).json({insertedId: data.id});
};

export = {
    createTask,
};
