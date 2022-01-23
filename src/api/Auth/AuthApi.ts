import { BaseApi } from '../BaseApi';
import { SignInRequest, SignUpRequest } from '../types';

class AuthApi extends BaseApi {
  constructor() {
    super('/auth');
  }

  public signIn = (data: SignInRequest) => this.http.post('/signin', data);

  public signUp = (data: SignUpRequest) => this.http.post('/signup', data);

  public logOut = () => this.http.post('/logout');

  public getUserInfo = () => this.http.get('/user');
}

export const authApi = new AuthApi();
