import { Request, Response } from 'express';
import { forumCommentService } from 'server/services/ForumCommentService';

export class ForumCommentAPI {
  public static create = async (request: Request, response: Response) => {
    const { userId, title, description } = request.params;

    try {
      await forumCommentService.create({
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
      await forumCommentService.update({
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
    const { topicId } = request.params;

    try {
      const data = await forumCommentService.find(Number(topicId));
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };

  public static findAll = async (request: Request, response: Response) => {
    const { limit, offset } = request.body;
    try {
      const data = await forumCommentService.getAll({
        limit,
        offset,
      });
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };

  public static findAllByTopic = async (request: Request, response: Response) => {
    const { topicId, limit, offset } = request.body;
    try {
      const data = await forumCommentService.getAllByTopicId({
        topicId,
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
      const data = await forumCommentService.delete(Number(topicId));
      return response.json(data);
    } catch (e) {
      console.log(e);
      response.sendStatus(400);
    }
  };
}
