import { SiteTheme } from 'server/db/models/SiteTheme';
import { UserTheme } from 'server/db/models/UserTheme';
import { BaseService } from './BaseService';

interface FindRequest {
  userId: number;
}

interface CreateRequest {
  userId: number;
  themeId: number;
}

interface DeleteRequest {
  id: number;
}

interface UpdateRequest {
  userId: number;
  themeId: number;
}

class UserThemeService implements BaseService {
  public find = ({ userId }: FindRequest) => {
    if (userId) {
      return UserTheme.findOne({
        where: {
          user_id: userId,
        },
      });
    }
    return UserTheme.findAll();
  };

  public create = (data: CreateRequest) => {
    return UserTheme.create(data);
  };

  public delete = ({ id }: DeleteRequest) => {
    return UserTheme.destroy({
      where: {
        id,
      },
    });
  };

  public update = ({ userId, themeId }: UpdateRequest) => {
    return SiteTheme.update(
      { themeId },
      {
        where: {
          user_id: userId,
        },
      },
    );
  };
}

export const userThemeService = new UserThemeService();
