import { UserData } from 'api/Auth';
import { Dispatch } from 'react';
import { createAppStore } from './store';
// import { store } from 'store';

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof createAppStore>;
export type AppDispatch = Dispatch<RootState>;
export type PreloadedData = {
  userData: UserData;
};
