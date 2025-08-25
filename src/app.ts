import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export { app }; // Named export, para tests
