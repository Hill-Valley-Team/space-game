import { Request, Response } from 'express';
import { userThemeService } from 'server/services/UserThemeService';

export class UserThemeAPI {
  public static create = async (request: Request, response: Response) => {
    const { themeId } = request.body;
    const user = response.locals.user;
    if (user) {
      try {
        await userThemeService.create({
          userId: Number(user.id),
          themeId: Number(themeId),
        });
        return response.sendStatus(201);
      } catch {
        response.sendStatus(400);
      }
    } else {
      response.sendStatus(400);
    }
  };

  public static update = async (request: Request, response: Response) => {
    const { themeId } = request.body;
    const user = response.locals.user;

    if (user) {
      try {
        await userThemeService.update({
          userId: Number(user.id),
          themeId: Number(themeId),
        });
        return response.sendStatus(201);
      } catch {
        response.sendStatus(400);
      }
    } else {
      response.sendStatus(400);
    }
  };

  public static find = async (_request: Request, response: Response) => {
    const user = response.locals.user;

    if (user) {
      try {
        const data = await userThemeService.find(Number(user.id));
        return response.json(data);
      } catch (e) {
        console.log(e);
        response.sendStatus(400);
      }
    } else {
      response.sendStatus(400);
    }
  };
}
