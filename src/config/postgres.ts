import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../models/User';
import { Project } from '../models/Project';
import { Task } from '../models/Task';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',          // Cambia si tu host es distinto
  port: 5432,
  username: 'postgres',       // Cambia por tu usuario
  password: 'postgres',       // Cambia por tu contraseña
  database: 'testdb',         // Cambia por tu base de datos
  synchronize: true,          // true solo para desarrollo
  logging: false,
  entities: [User, Project, Task],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => console.log('Database initialized'))
  .catch((err) => console.error('DB init error:', err));
