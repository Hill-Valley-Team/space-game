import { ValidationType } from '../utils/validation';

export enum InputNames {
  FIRST_NAME = 'firstName',
  EMAIL = 'email',
  SECOND_NAME = 'secondName',
  DISPLAY_NAME = 'displayName',
  PHONE = 'phone',
  PASSWORD = 'password',
  LOGIN = 'login',
  OLD_PASSWORD = 'oldPassword',
  NEW_PASSWORD = 'newPassword',
  REPEAT_PASSWORD = 'repeatPassword',
  AVATAR = 'avatar',
}

export const formScheme: Record<InputNames, { name: string; type: ValidationType }> = {
  [InputNames.LOGIN]: {
    name: 'login',
    type: ValidationType.LOGIN,
  },
  [InputNames.EMAIL]: {
    name: 'email',
    type: ValidationType.EMAIL,
  },
  [InputNames.FIRST_NAME]: {
    name: 'first_name',
    type: ValidationType.SHORT_TEXT,
  },
  [InputNames.SECOND_NAME]: {
    name: 'second_name',
    type: ValidationType.SHORT_TEXT,
  },
  [InputNames.PHONE]: {
    name: 'phone',
    type: ValidationType.PHONE,
  },
  [InputNames.PASSWORD]: {
    name: 'password',
    type: ValidationType.PASSWORD,
  },
  [InputNames.REPEAT_PASSWORD]: {
    name: 'repeat_password',
    type: ValidationType.EQUAL,
  },
  [InputNames.OLD_PASSWORD]: {
    name: 'old_password',
    type: ValidationType.PASSWORD,
  },

  [InputNames.DISPLAY_NAME]: {
    name: 'display_name',
    type: ValidationType.SHORT_TEXT,
  },
  [InputNames.NEW_PASSWORD]: {
    name: 'new_password',
    type: ValidationType.PASSWORD,
  },
  [InputNames.AVATAR]: {
    name: 'avatar',
    type: ValidationType.FILE,
  },
};
