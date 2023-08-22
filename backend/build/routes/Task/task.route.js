"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const task_controllers_1 = __importDefault(require("../../controllers/task.controllers"));
const taskRoute = express_1.default.Router();
taskRoute.post('/task', task_controllers_1.default.createTask);
taskRoute.get('/task', task_controllers_1.default.getAllTasks);
taskRoute.put('/task/:id', task_controllers_1.default.updtadeTask);
taskRoute.delete('/task/:id', task_controllers_1.default.deleteTask);
module.exports = taskRoute;
