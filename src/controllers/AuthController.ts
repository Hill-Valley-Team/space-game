import { authApi } from '../api/Auth';
import { signInRequestFields, signUpRequestFields } from '../api/consts';
import { SignInRequest, SignUpRequest } from '../api/types';
import { prepareDataToRequest } from './utils/prepareDataToRequest';

export class AuthController {
  public signIn = (formData: FormData) => {
    const preparedData = prepareDataToRequest(signInRequestFields, formData) as SignInRequest;
    return authApi.signIn(preparedData);
  };

  public signUp = (formData: FormData) => {
    const preparedData = prepareDataToRequest(signUpRequestFields, formData) as SignUpRequest;
    return authApi.signUp(preparedData);
  };

  public logOut = () => authApi.logOut();
}

export const authController = new AuthController();
