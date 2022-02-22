import { configureStore } from '@reduxjs/toolkit';
import { isServer } from 'utils/isServer';
import { userAPI } from '../services/UserService';
import { createThemeSlice, themeSlice } from './slices/themeSlice';
import { createUserSlice } from './slices/userSlice';
import { PreloadedData } from './types';

export const createAppStore = (preloadedData?: PreloadedData | object) => {
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
      theme: themeSlice.reducer,
    },
    devTools: !isServer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
  });
};
