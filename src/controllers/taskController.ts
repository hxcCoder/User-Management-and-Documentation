import { Request, Response } from 'express';
import { AppDataSource } from '../config/postgres';
import { Task } from '../models/Task';
import { Project } from '../models/Project';

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, projectId } = req.body;
    if (!title || !projectId) return res.status(400).json({ message: 'Missing fields' });

    const taskRepo = AppDataSource.getRepository(Task);
    const projectRepo = AppDataSource.getRepository(Project);
    const project = await projectRepo.findOneBy({ id: projectId });
    if (!project) return res.status(404).json({ message: 'Project not found' });

    const task = taskRepo.create({ title, description, project });
    await taskRepo.save(task);

    return res.status(201).json(task);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const taskRepo = AppDataSource.getRepository(Task);
    const tasks = await taskRepo.find({ relations: ['project'] });
    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};
