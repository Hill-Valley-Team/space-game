import { UserData } from 'api/Auth';
import { Dispatch } from 'react';
import { createAppStore } from './store';
// import { store } from 'store';

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof createAppStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type PreloadedData = {
  userData: UserData;
};
