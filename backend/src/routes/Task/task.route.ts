import express from 'express';

const taskRoute = express.Router();

taskRoute.get('/task', (_req, res) => res.status(200).json({message: 'API funcionando!'}));

export = taskRoute;
