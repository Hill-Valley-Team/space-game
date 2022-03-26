import { Draft, Slice } from '@reduxjs/toolkit';
import { UserData } from 'api/Auth';
import { UserThemeData } from 'api/Theme/types';
import { FetchStatus } from 'store/consts';

export type UserState = {
  status: FetchStatus;
  data: UserData | undefined;
  error: string | undefined;
};

export type UserSlice = Slice<
  UserState,
  {
    resetUser(): void;
    setUser(state: Draft<UserState>, action: { payload: unknown; type: string }): void;
  },
  string
>;

export type ThemeState = {
  status: FetchStatus;
  data: UserThemeData | undefined;
  error: string | undefined;
};
