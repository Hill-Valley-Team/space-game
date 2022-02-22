import { localBaseUrl } from 'api/consts';
import { AxiosRequestConfig } from 'axios';
import { BaseApi } from '../BaseApi';
import { AddThemeRequest, GetUserThemeRequest } from './types';

class ThemeApi extends BaseApi {
  constructor() {
    super('/theme', localBaseUrl);
  }

  public addTheme = (data: AddThemeRequest) => this.http.post('', data);

  public getUserTheme = (userId: number) => this.http.get(`/theme/${userId}`);
  public setUserTheme = (userId: number, themeId: number) => this.http.put(`/theme/${userId}`);
  public deleteUserTheme = (userId: number, themeId: number) =>
    this.http.delete(`/theme/${userId}`);

  //   public signUp = (data: SignUpRequest) => this.http.post('/signup', data);

  //   public logOut = () => this.http.post('/logout');

  //   public getUserInfo = (options?: AxiosRequestConfig | undefined) =>
  //     this.http.get('/user', { ...options });
}

export const themeApi = new ThemeApi();
