import { UserData } from 'api/Auth/types';

export type UserState = {
  data: UserData | null;
  isLoading: boolean;
};
