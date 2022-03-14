import { UserData } from 'api/Auth';
import { Dispatch } from 'react';
import { createAppStore } from './store';

export type RootStore = ReturnType<typeof createAppStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type PreloadedData = {
  userData: UserData;
};
