import { localBaseUrl } from 'api/consts';
import { AxiosRequestConfig } from 'axios';
import { BaseApi } from '../BaseApi';
import { AddThemeRequest } from './types';

class ThemeApi extends BaseApi {
  constructor() {
    super('/theme', localBaseUrl);
  }

  public addTheme = (data: AddThemeRequest) => this.http.post('', data);

  //   public signUp = (data: SignUpRequest) => this.http.post('/signup', data);

  //   public logOut = () => this.http.post('/logout');

  //   public getUserInfo = (options?: AxiosRequestConfig | undefined) =>
  //     this.http.get('/user', { ...options });
}

export const themeApi = new ThemeApi();
