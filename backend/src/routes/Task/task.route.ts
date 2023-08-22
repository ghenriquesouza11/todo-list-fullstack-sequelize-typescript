import express from 'express';
import taskControllers from '../../controllers/task.controllers';

const taskRoute = express.Router();

taskRoute.post('/task', taskControllers.createTask);

taskRoute.get('/task', taskControllers.getAllTasks);

taskRoute.put('/task/:id', taskControllers.updtadeTask);

taskRoute.delete('/task/:id', taskControllers.deleteTask);

export = taskRoute;
