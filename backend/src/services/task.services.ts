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

const updateTask = async (task: Task): Promise<serviceResponse<number>> => {
    const {id, title, status} = task;

    const [updatedTask] = await TaskModel.update(
        {title, status},
        {where: {id}},
    );

    return {status: 200, data: updatedTask};
};

const deleteTask = async (id: number): Promise<serviceResponse<number>> => {
    const deletedTask = await TaskModel.destroy({where: {id}});

    return {status: 200, data: deletedTask};
};

export = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask,
};
