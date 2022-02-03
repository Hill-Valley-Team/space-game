import { UserData } from 'api/Auth';

type RequestStatus = 'idle' | 'loading' | 'success' | 'failure';

export interface UserState {
  status: RequestStatus;
  data: UserData | null | undefined;
  error: string | null;
}
