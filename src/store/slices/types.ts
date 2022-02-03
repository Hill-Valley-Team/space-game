import { UserData } from 'api/Auth';
import { FetchStatus } from 'store/consts';

export type UserState = {
  status: FetchStatus;
  data: UserData | null | undefined;
  error: string | null;
};
