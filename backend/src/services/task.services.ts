import { TaskInpputableFields } from '../database/models/Task.model';
import TaskModel from '../database/models/Task.model';
import { Task } from '../database/types/Task';

type serviceResponse = {
    status: number,
    data: Task,
};

const createTask = async (task: TaskInpputableFields): Promise<serviceResponse> => {
    const { title, status } = task;

    const createdTask = (await TaskModel.create({title, status})).toJSON();

    return {status: 201, data: createdTask};
};

export = {
    createTask,
};
