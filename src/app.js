import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { corsMiddleware } from './middlewares/cors.js';

import authRoutes from './routers/auth.routes.js';
import taskRouter from './routers/task.routes.js';

const app = express();
app.use(corsMiddleware());

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);
app.use(taskRouter);

export default app;