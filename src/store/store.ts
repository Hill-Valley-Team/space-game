import { configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../services/UserService';
import { userReducer } from './user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
});
