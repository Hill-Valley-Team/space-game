import { configureStore } from '@reduxjs/toolkit';
import { isServer } from 'utils/isServer';
import { userAPI } from '../services/UserService';
// eslint-disable-next-line import/no-named-as-default
import { createUserSlice } from './slices/userSlice';
import { PreloadedData, RootState } from './types';

export const createAppStore = (preloadedData?: PreloadedData | RootState) => {
  let userReducer;
  let preloadedState;

  if (preloadedData && 'userData' in preloadedData) {
    userReducer = createUserSlice(preloadedData.userData).reducer;
  } else {
    userReducer = createUserSlice().reducer;
    preloadedState = preloadedData;
  }

  return configureStore({
    preloadedState,
    reducer: {
      [userAPI.reducerPath]: userAPI.reducer,
      user: userReducer,
    },
    devTools: !isServer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
  });
};
