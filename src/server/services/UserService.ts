import { User } from 'server/db/models/User';
import { BaseService } from './BaseService';

interface FindRequest {
  id: number;
}

interface CreateRequest {
  firstName: string;
  secondName: string;
}

interface DeleteRequest {
  id: number;
}

interface UpdateRequest {
  id: number;
  firstName: string;
  secondName: string;
}

class UserService implements BaseService {
  public find = ({ id }: FindRequest) => {
    return User.findByPk(id);
  };

  public create = (data: CreateRequest) => {
    return User.create(data);
  };

  public delete = ({ id }: DeleteRequest) => {
    return User.destroy({
      where: {
        id,
      },
    });
  };

  public update = ({ id, firstName, secondName }: UpdateRequest) => {
    return User.update(
      { firstName, secondName },
      {
        where: {
          id,
        },
      },
    );
  };
}

export const userService = new UserService();
