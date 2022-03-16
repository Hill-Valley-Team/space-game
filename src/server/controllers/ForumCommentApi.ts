import { Request, Response } from 'express';
import { forumCommentService } from 'server/services/ForumCommentService';

export class ForumCommentAPI {
  public static create = async (request: Request, response: Response) => {
    const { text, parentId, topicId } = request.body;
    const userId = response.locals.user.id;

    try {
      await forumCommentService.create({
        text,
        userId: Number(userId),
        parentId,
        topicId,
      });
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static update = async (request: Request, response: Response) => {
    const { id, text } = request.params;

    try {
      await forumCommentService.update({
        id: Number(id),
        text,
      });
      return response.sendStatus(201);
    } catch {
      response.sendStatus(400);
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
      const data = await forumCommentService.find(Number(id));
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
