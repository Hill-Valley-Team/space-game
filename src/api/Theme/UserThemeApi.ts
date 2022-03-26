import { BaseApi } from '../BaseApi';
import { localBaseUrl } from '../consts';

class UserThemeApi extends BaseApi {
  constructor() {
    super('/usertheme', localBaseUrl);
  }

  public getUserTheme = () => this.http.get('');
  public setUserTheme = (themeId: number) => this.http.post('', { themeId });
  public addUserTheme = (themeId: number) => this.http.put('', { themeId });
}

export const userThemeApi = new UserThemeApi();
