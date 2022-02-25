import { Request, Response } from 'express';
import { userThemeService } from 'server/services/UserThemeService';

export class UserThemeAPI {
  public static create = async (request: Request, response: Response) => {
    const { userId, themeId } = request.params;

    try {
      await userThemeService.create({
        userId: Number(userId),
        themeId: Number(themeId),
      });
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static update = async (request: Request, response: Response) => {
    const { userId, themeId } = request.params;

    try {
      await userThemeService.update({
        userId: Number(userId),
        themeId: Number(themeId),
      });
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { userId } = request.params;

    try {
      const data = await userThemeService.find(Number(userId));
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };
}
