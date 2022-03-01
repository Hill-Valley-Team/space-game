import { ForumTopic } from 'server/db/models/ForumTopic';
import { BaseService } from './BaseService';

interface CreateRequest {
  title: string;
  description: string;
  userId: number;
}

interface UpdateRequest {
  id: number;
  description?: string;
  title?: string;
}

interface GetAllRequest {
  limit: number;
  offset: number;
}

class ForumTopicService implements BaseService {
  public find = (id: number) => {
    return ForumTopic.findByPk(id);
  };

  public getAll = ({ limit, offset }: GetAllRequest) => {
    return ForumTopic.findAndCountAll({
      limit,
      offset,
    });
  };

  public create = (data: CreateRequest) => {
    return ForumTopic.create(data);
  };

  public delete = (id: number) => {
    return ForumTopic.destroy({
      where: {
        id,
      },
    });
  };

  public update = ({ id, description, title }: UpdateRequest) => {
    return ForumTopic.update(
      { description, title },
      {
        where: {
          id,
        },
      },
    );
  };
}

export const forumTopicService = new ForumTopicService();
