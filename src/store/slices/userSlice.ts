import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi, UserData } from 'api/Auth';
import { FetchStatus } from 'store/consts';
import { UserSlice, UserState } from './types';

export const fetchUser = createAsyncThunk('users/fetch', async () => {
  const response = await authApi.getUserInfo();
  return response.data;
});

export const createUserSlice = (data?: UserData) => {
  const initialUserState: UserState = {
    status: FetchStatus.IDLE,
    data: undefined,
    error: undefined,
  };

  if (data) {
    initialUserState.data = data;
    initialUserState.status = FetchStatus.SUCCESS;
    initialUserState.error = undefined;
  }

  return createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
      resetUser() {
        initialUserState;
      },
      setUser(state, action) {
        state.status = FetchStatus.SUCCESS;
        state.data = action.payload as UserData;
        state.error = undefined;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = FetchStatus.SUCCESS;
      });
      builder.addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = FetchStatus.FAILURE;
        state.data = undefined;
      });
      builder.addCase(fetchUser.pending, (state) => {
        state.status = FetchStatus.LOADING;
      });
    },
  });
};
