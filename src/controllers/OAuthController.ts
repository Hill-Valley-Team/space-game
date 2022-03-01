import {oAuthApi} from "../api/OAuthApi";
import {useGetUserInfo} from "../hooks/useGetUserInfo";

export const loginWithOAuth = (code: string) => {
  return oAuthApi.oAuthSignIn({
    code: code,
    redirect_uri: 'https://local.ya-praktikum.tech',
  });
};
