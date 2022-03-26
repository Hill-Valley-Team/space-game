import { SiteTheme } from 'server/db/models/SiteTheme';
import { BaseService } from './BaseService';

interface CreateRequest {
  title: string;
  description: string;
}

interface DeleteRequest {
  id: number;
}

interface UpdateRequest {
  id: number;
  description?: string;
  title?: string;
}

class ThemeService implements BaseService {
  public find = (id: number) => {
    return SiteTheme.findByPk(id);
  };

  public getAll = () => {
    return SiteTheme.findAll();
  };

  public create = (data: CreateRequest) => {
    return SiteTheme.create(data);
  };

  public delete = (id: number) => {
    return SiteTheme.destroy({
      where: {
        id,
      },
    });
  };

  public update = ({ id, description, title }: UpdateRequest) => {
    return SiteTheme.update(
      { description, title },
      {
        where: {
          id,
        },
      },
    );
  };
}

export const themeService = new ThemeService();
