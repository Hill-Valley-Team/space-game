import { localBaseUrl } from 'api/consts';
import { BaseApi } from '../BaseApi';
import { AddThemeRequest } from './types';

class ThemeApi extends BaseApi {
  constructor() {
    super('/theme', localBaseUrl);
  }

  public addTheme = (data: AddThemeRequest) => this.http.post('', data);
  public getTheme = (themeId: number) => this.http.get(`/${themeId}`);
}

export const themeApi = new ThemeApi();
