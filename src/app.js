import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import { FRONTEND_URL } from './config.js';

import authRoutes from './routers/auth.routes.js';
import taskRouter from './routers/task.routes.js';

const app = express();
const ACCEPTED_ORIGINS = [
  "https://async-tasks.vercel.app",
  "https://192.168.1.75:5173",
  "http://192.168.1.75:5173",
  "https://localhost:5173",
  "http://localhost:5173",
];

app.use(cors({
    origin: (origin, callback) => {
      // Permitir solicitudes sin origen (útil para herramientas como Postman)
      if (!origin) {
        return callback(null, true);
      }

      // Verificar si el origen está permitido
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      // Si el origen no está permitido, rechazar la solicitud
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],  // Encabezados permitidos
  }))

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);
app.use(taskRouter);

export default app;