import { Task } from '../../types/Task';

import db from './index';

import { Optional, ModelDefined, DataTypes } from 'sequelize';

export type TaskInpputableFields = Optional<Task, 'id'>;

type TaskModelCreator = ModelDefined<Task, TaskInpputableFields>;

const TaskModel: TaskModelCreator = db.define('Task', {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
},
{
    timestamps: false,
    tableName: 'Tasks',
});

export default TaskModel;
