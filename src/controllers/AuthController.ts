import { authApi } from '../api/Auth';
import { signInRequestFields, signUpRequestFields } from '../api/consts';
import { SignInRequest, SignUpRequest } from '../api/types';
import { prepareDataToRequest } from './utils/prepareDataToRequest';

export class AuthController {
  public signIn = (formData: FormData) => {
    const preparedData = prepareDataToRequest<SignInRequest>(signInRequestFields, formData);
    return authApi.signIn(preparedData);
  };

  public signUp = (formData: FormData) => {
    const preparedData = prepareDataToRequest<SignUpRequest>(signUpRequestFields, formData);
    return authApi.signUp(preparedData);
  };

  public logOut = () => authApi.logOut();

  // public getUserInfo = () => authApi.getUserInfo();
}

export const authController = new AuthController();
