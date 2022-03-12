import { oAuthApi } from '../api/OAuthApi';
import { REDIRECT_URI } from '../consts/urls';

export const loginWithOAuth = (code: string) => {
  return oAuthApi.oAuthSignIn({
    code: code,
    redirect_uri: REDIRECT_URI,
  });
};
