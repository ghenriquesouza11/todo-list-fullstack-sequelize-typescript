import { TaskInpputableFields } from '../database/models/Task.model';
import TaskModel from '../database/models/Task.model';
import { Task } from '../types/Task';

type serviceResponse<T> = {
    status: number,
    data: T,
};

const createTask = async (task: TaskInpputableFields): Promise<serviceResponse<Task>> => {
    const { title, status } = task;

    const createdTask = (await TaskModel.create({title, status})).toJSON();

    return {status: 201, data: createdTask};
};

const getAllTasks = async (): Promise<serviceResponse<object>> => {
    const allTasks = await TaskModel.findAll();

    return {status: 200, data: allTasks};
};

export = {
    createTask,
    getAllTasks,
};
