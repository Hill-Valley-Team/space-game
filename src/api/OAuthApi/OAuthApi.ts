import { BaseApi } from '../BaseApi';
import {OAuthRequest} from './types';

class OAuthApi extends BaseApi {
  constructor() {
    super('/oauth/yandex');
  }

  public oAuthSignIn = (data: OAuthRequest) =>
    this.http.post('/', data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
}

export const oAuthApi = new OAuthApi();
