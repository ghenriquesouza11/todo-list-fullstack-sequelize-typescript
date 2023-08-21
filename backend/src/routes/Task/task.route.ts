import express from 'express';
import taskControllers from '../../controllers/task.controllers';

const taskRoute = express.Router();

taskRoute.post('/task', taskControllers.createTask);

export = taskRoute;
