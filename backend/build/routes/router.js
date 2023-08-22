"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const task_route_1 = __importDefault(require("./Task/task.route"));
const router = express_1.default.Router();
router.use(task_route_1.default);
module.exports = router;
