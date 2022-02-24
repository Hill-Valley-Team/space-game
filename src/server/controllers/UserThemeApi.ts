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
    const { userId } = request.params;

    try {
      const data = await userThemeService.find(Number(userId));
      return response.json(data[0]);
    } catch {
      response.sendStatus(400);
    }
  };
}
