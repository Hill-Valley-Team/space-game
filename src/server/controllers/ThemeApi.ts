import { themeService } from '../services/ThemeService';
import { Request, Response } from 'express';

export class ThemeAPI {
  public static create = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      await themeService.create(body);
      return response.sendStatus(201);
    } catch (error) {
      return response.sendStatus(400);
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      const data = await themeService.find(body);
      return response.json(data);
    } catch {
      response.sendStatus(400);
    }
  };
}
