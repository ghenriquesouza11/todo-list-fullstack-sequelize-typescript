"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const sequelize_1 = require("sequelize");
const TaskModel = index_1.default.define('Task', {
    title: sequelize_1.DataTypes.STRING,
    status: sequelize_1.DataTypes.STRING,
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date(),
    },
}, {
    timestamps: false,
    tableName: 'Tasks',
});
exports.default = TaskModel;
