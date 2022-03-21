import { Request, Response } from 'express';
import { userService } from 'server/services/UserService';

export class UserAPI {
  public static create = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      await userService.create(body);
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      const data = await userService.find(body);
      return response.json(data);
    } catch {
      response.sendStatus(400);
    }
  };
}
