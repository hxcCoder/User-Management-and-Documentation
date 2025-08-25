import { Request, Response } from 'express';
import { AppDataSource } from '../config/postgres';
import { Project } from '../models/Project';

export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: 'Name required' });

    const repo = AppDataSource.getRepository(Project);
    const project = repo.create({ name, description });
    await repo.save(project);

    return res.status(201).json(project);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getAllProjects = async (_req: Request, res: Response) => {
  try {
    const repo = AppDataSource.getRepository(Project);
    const projects = await repo.find();
    return res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};
