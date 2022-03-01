import { Request, Response } from 'express';
import { forumTopicService } from 'server/services/ForumTopicService';

const DEFAULT_LIMIT = 12;
const DEFAULT_OFFSET = 12;

export class ForumTopicAPI {
  public static create = async (request: Request, response: Response) => {
    const { userId, title, description } = request.params;

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
    const { id, description, title } = request.params;

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
    const { id } = request.params;

    try {
      const data = await forumTopicService.find(Number(id));
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };

  public static findAll = async (request: Request, response: Response) => {
    const { limit, offset } = request.params;
    try {
      const data = await forumTopicService.getAll({
        limit: limit ? Number(limit) : DEFAULT_LIMIT,
        offset: offset ? Number(offset) : DEFAULT_OFFSET,
      });
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };
}
