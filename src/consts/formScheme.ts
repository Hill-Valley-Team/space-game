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
}

export const formScheme: Record<InputNames, { name: string; type: ValidationType }> = {
  [InputNames.LOGIN]: {
    name: 'user-login',
    type: 'login',
  },
  [InputNames.EMAIL]: {
    name: 'user-email',
    type: 'email',
  },
  [InputNames.FIRST_NAME]: {
    name: 'user-first-name',
    type: 'shortText',
  },
  [InputNames.SECOND_NAME]: {
    name: 'user-second-name',
    type: 'shortText',
  },
  [InputNames.PHONE]: {
    name: 'user-phone',
    type: 'phone',
  },
  [InputNames.PASSWORD]: {
    name: 'user-password',
    type: 'password',
  },
  [InputNames.REPEAT_PASSWORD]: {
    name: 'repeat-user-password',
    type: 'equal',
  },
  [InputNames.OLD_PASSWORD]: {
    name: 'old-user-password',
    type: 'password',
  },

  [InputNames.DISPLAY_NAME]: {
    name: 'display_name',
    type: 'shortText',
  },
  [InputNames.NEW_PASSWORD]: {
    name: 'new_password',
    type: 'password',
  },
};
