import { Request, Response } from 'express';
import { userThemeService } from 'server/services/UserThemeService';

export class UserThemeAPI {
  public static create = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      await userThemeService.create(body);
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      const data = await userThemeService.find(body.userId);
      return response.json(data);
    } catch {
      response.sendStatus(400);
    }
  };
}
