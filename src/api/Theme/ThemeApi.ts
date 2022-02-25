import { localBaseUrl } from 'api/consts';
import { BaseApi } from '../BaseApi';
import { AddThemeRequest, GetUserThemeRequest } from './types';

class ThemeApi extends BaseApi {
  constructor() {
    super('/theme', localBaseUrl);
  }

  public addTheme = (data: AddThemeRequest) => this.http.post('', data);
  public getUserTheme = (userId: number) => this.http.get(`/${userId}`);
  public setUserTheme = (userId: number, themeId: number) =>
    this.http.post(`/${userId}/${themeId}`);
  public addUserTheme = (userId: number, themeId: number) => this.http.put(`/${userId}/${themeId}`);
  public deleteUserTheme = (userId: number) => this.http.delete(`/${userId}`);
}

export const themeApi = new ThemeApi();
