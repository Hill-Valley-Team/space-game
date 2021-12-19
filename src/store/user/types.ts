import { UserData } from '../../api/Auth';

export type UserState = {
  data: UserData | null;
  loading: boolean;
};
