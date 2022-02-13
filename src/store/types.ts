import { UserData } from 'api/Auth';
import { store } from 'store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type PreloadedData = {
  userData: UserData;
};
