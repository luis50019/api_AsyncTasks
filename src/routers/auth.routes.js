// This document is responsible for controlling all end-point for controlling data of the user
import { Router } from "express";
import { register, login, logout, profile, verifyToken } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createUserSchema, loginSchema} from "../schemas/auth.schema.js";
import {validateToken} from '../middlewares/validateToken.js';

const router = Router();

router.post('/register',validateSchema(createUserSchema), register);
router.post('/login',validateSchema(loginSchema) ,login);
router.post('/logout',logout);
router.get('/profile',validateToken,profile);
router.get('/verify',verifyToken);

export default router;