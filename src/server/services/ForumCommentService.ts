import { ForumComment } from 'server/db/models/ForumComment';
import { BaseService } from './BaseService';

interface CreateRequest {
  text: string;
  userId: number;
  parentId: number;
  topicId: number;
}

interface UpdateRequest {
  id: number;
  text?: string;
}

interface GetAllRequest {
  limit: number;
  offset: number;
}
interface GetAllByTopicRequest {
  topicId: number;
  limit: number;
  offset: number;
}

class ForumCommentService implements BaseService {
  public find = (id: number) => {
    return ForumComment.findByPk(id);
  };

  public getAll = ({ limit, offset }: GetAllRequest) => {
    return ForumComment.findAll({
      limit,
      offset,
    });
  };

  public getAllByTopicId = ({ topicId, limit, offset }: GetAllByTopicRequest) => {
    return ForumComment.findAll({
      where: {
        topicId,
      },
      order: [['createdAt', 'DESC']],
      limit,
      offset,
    });
  };

  public create = (data: CreateRequest) => {
    return ForumComment.create(data);
  };

  public delete = (id: number) => {
    return ForumComment.destroy({
      where: {
        id,
      },
    });
  };

  public update = ({ id, text }: UpdateRequest) => {
    return ForumComment.update(
      {
        text,
      },
      {
        where: {
          id,
        },
      },
    );
  };
}

export const forumCommentService = new ForumCommentService();
