// This document is responsible for controlling all end-point for controlling data of the tasks of each user

import { Router } from "express";
import { createTask,getTasks,getTask,updateTask,deleteTask, updateSectionTask} from "../controllers/task.controllers.js";
import validateToken from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router =  Router();

router.post('/task',validateToken,validateSchema(createTaskSchema),createTask);
router.get('/tasks',validateToken,getTasks);
router.get('/task/:id',validateToken,getTask);
router.put('/tasks/:id',validateToken,updateTask);
router.delete('/tasks/:id',validateToken,deleteTask);
router.put('/taskSection/:id/:section',validateToken,updateSectionTask);

export default router;