import { createAsyncThunk } from '@reduxjs/toolkit';
import { authController } from '../../controllers/AuthController';

export const getUserData = createAsyncThunk('user/fetchUserInfo', async () =>
  authController
    .getUserInfo()
    .then((response) => response.data)
    .catch(() => {}),
);
