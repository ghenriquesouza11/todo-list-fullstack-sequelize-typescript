import express from 'express';
import taskRoute from './Task/task.route';

const router = express.Router();

router.use(taskRoute);

export = router;
