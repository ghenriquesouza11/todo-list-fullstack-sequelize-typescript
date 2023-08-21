import { QueryInterface, Model, DataTypes } from 'sequelize';

import { Task } from '../types/Task';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Task>>('Tasks', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('Tasks');
    }
};
