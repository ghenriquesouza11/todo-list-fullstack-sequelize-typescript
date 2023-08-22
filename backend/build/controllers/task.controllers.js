"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const task_services_1 = __importDefault(require("../services/task.services"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = req.body;
    const { status, data } = yield task_services_1.default.createTask(task);
    return res.status(status).json({ insertedId: data.id });
});
const getAllTasks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, data } = yield task_services_1.default.getAllTasks();
    return res.status(status).json(data);
});
const updtadeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, status } = req.body;
    const task = { id: parseInt(id), title, status };
    const createdTask = yield task_services_1.default.updateTask(task);
    return res.status(createdTask.status).json(createdTask.data);
});
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status, data } = yield task_services_1.default.deleteTask(parseInt(id));
    return res.status(status).json(data);
});
module.exports = {
    createTask,
    getAllTasks,
    updtadeTask,
    deleteTask,
};
