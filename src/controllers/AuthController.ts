import { authApi } from '../Api/Auth';
import { signUpRequestFields } from '../Api/consts';
import { SignUpRequest } from '../Api/types';
import { prepareDataToRequest } from './utils/prepareDataToRequest';

export class AuthController {
  public signUp = (formData: FormData) => {
    const preparedData = prepareDataToRequest(signUpRequestFields, formData) as SignUpRequest;
    return authApi.signUp(preparedData);
  };
}

export const authController = new AuthController();
