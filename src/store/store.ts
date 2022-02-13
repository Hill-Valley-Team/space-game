import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { isServer } from 'utils/isServer';
import { userAPI } from '../services/UserService';
// eslint-disable-next-line import/no-named-as-default
import userSlice, { createUserSlice } from './slices/userSlice';
import { PreloadedData } from './types';
let userReducer;

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    user: userReducer ?? userSlice,
  },
  devTools: !isServer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
});

export const createAppStore = (preloadedData: PreloadedData) => {
  userReducer = createUserSlice(preloadedData.userData);

  console.log(preloadedData.userData);
  return store;
};
