import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import { AppDataSource } from './config/postgres';

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRoutes);

AppDataSource.initialize()
  .then(() => console.log('📦 Base de datos conectada'))
  .catch((err) => console.error('❌ Error al conectar DB:', err));

export default app;
