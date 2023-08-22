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
const Task_model_1 = __importDefault(require("../database/models/Task.model"));
const createTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, status } = task;
    const createdTask = (yield Task_model_1.default.create({ title, status })).toJSON();
    return { status: 201, data: createdTask };
});
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const allTasks = yield Task_model_1.default.findAll();
    return { status: 200, data: allTasks };
});
const updateTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, status } = task;
    const [updatedTask] = yield Task_model_1.default.update({ title, status }, { where: { id } });
    return { status: 200, data: updatedTask };
});
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedTask = yield Task_model_1.default.destroy({ where: { id } });
    return { status: 200, data: deletedTask };
});
module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask,
};
