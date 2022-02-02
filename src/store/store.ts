import { configureStore } from '@reduxjs/toolkit';
import { isServer } from 'utils/isServer';
import { userAPI } from '../services/UserService';
// eslint-disable-next-line import/no-named-as-default
import userSlice from './slices/userSlice';
import { RootState } from '.';

export const createAppStore = (initialState?: RootState) =>
  configureStore({
    preloadedState: initialState,
    reducer: {
      [userAPI.reducerPath]: userAPI.reducer,
      user: userSlice,
    },
    devTools: !isServer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
  });
