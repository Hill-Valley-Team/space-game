import { BaseApi } from '../BaseApi';
import { localBaseUrl } from '../consts';

class UserThemeApi extends BaseApi {
  constructor() {
    super('/usertheme', localBaseUrl);
  }

  public getUserTheme = (userId: number) => this.http.get(`/${userId}`);
  public setUserTheme = (userId: number, themeId: number) =>
    this.http.post(`/${userId}/${themeId}`);
  public addUserTheme = (userId: number, themeId: number) => this.http.put(`/${userId}/${themeId}`);
}

export const userThemeApi = new UserThemeApi();
