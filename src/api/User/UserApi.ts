import { BaseApi } from 'api/BaseApi';

class UserApi extends BaseApi {
  constructor() {
    super('/user');
  }

  public getUserById = (userId: number) => this.http.get(`/${userId}`);
}

export const userApi = new UserApi();
