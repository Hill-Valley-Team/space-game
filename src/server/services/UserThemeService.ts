import { Op } from 'sequelize/types';
import { SiteTheme } from 'server/db/models/SiteTheme';
import { User } from 'server/db/models/User';
import { UserTheme } from 'server/db/models/UserTheme';
import { sequelize } from 'server/db/sequelize';
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
  public find = async (userId: number) => {
    return UserTheme.findOrCreate({
      where: {
        user_id: userId,
      },
      defaults: {
        theme_id: 1,
      },
    });
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
