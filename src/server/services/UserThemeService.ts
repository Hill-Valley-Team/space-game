import { DEFAULT_THEME_ID } from 'hooks/useUserTheme/consts';
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
  public find = async (userId: number) => {
    return SiteTheme.findOne({
      attributes: ['id', 'theme', 'description'],
      include: {
        model: UserTheme,
        where: {
          user_id: userId,
        },
        as: 'user_theme',
      },
    });
  };

  public findOrCreate = async (userId: number) => {
    return UserTheme.findOrCreate({
      where: {
        userId,
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
    return UserTheme.update(
      { themeId },
      {
        where: {
          userId,
        },
      },
    );
  };
}

export const userThemeService = new UserThemeService();
