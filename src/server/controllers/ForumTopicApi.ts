import { Request, Response } from 'express';
import { forumTopicService } from 'server/services/ForumTopicService';

export class ForumTopicAPI {
  public static create = async (request: Request, response: Response) => {
    const { title, description } = request.body;
    const userId = response.locals.user.id;

    try {
      await forumTopicService.create({
        userId: Number(userId),
        title,
        description,
      });
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static update = async (request: Request, response: Response) => {
    const { id, description, title } = request.body;

    try {
      await forumTopicService.update({
        id: Number(id),
        description,
        title,
      });
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { id } = request.body;

    try {
      const data = await forumTopicService.find(Number(id));
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };

  public static findAll = async (request: Request, response: Response) => {
    const { limit, offset } = request.body;
    try {
      const data = await forumTopicService.getAll({
        limit,
        offset,
      });
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };

  public static delete = async (request: Request, response: Response) => {
    const { topicId } = request.params;
    try {
      const data = await forumTopicService.delete(Number(topicId));
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };
}
