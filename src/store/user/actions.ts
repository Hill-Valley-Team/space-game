import { createAsyncThunk } from '@reduxjs/toolkit';
import { authController } from '../../controllers/AuthController';

export const getUserData = createAsyncThunk(
  'user/fetchUserInfo',
  async () => {
    const response = await authController.getUserInfo();
    return response.data;
  },
  // authController
  //   .getUserInfo()
  //   .then((response) => response.data)
  //   .catch(() => {}),
);
