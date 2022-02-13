import { configureStore } from '@reduxjs/toolkit';
import { isServer } from 'utils/isServer';
import { userAPI } from '../services/UserService';
// eslint-disable-next-line import/no-named-as-default
import userSlice, { createUserSlice } from './slices/userSlice';
import { PreloadedData, RootState } from './types';
let userReducer;
let preloadedState;

export const store = configureStore({
  preloadedState,
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    user: userReducer ?? userSlice,
  },
  devTools: !isServer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
});

export const createAppStore = (preloadedData: PreloadedData | RootState) => {
  if ('userData' in preloadedData) {
    userReducer = createUserSlice(preloadedData.userData);
  } else {
    preloadedState = preloadedData;
  }
  return store;
};
