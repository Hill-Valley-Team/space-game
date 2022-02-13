import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi, UserData } from 'api/Auth';
import { FetchStatus } from 'store/consts';
import { UserState } from './types';

let initialUserState: UserState = {
  status: FetchStatus.IDLE,
  data: null,
  error: null,
};

export const fetchUser = createAsyncThunk('users/fetch', async () => {
  const response = await authApi.getUserInfo();
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    resetUser(state) {
      state.status = FetchStatus.IDLE;
      state.data = undefined;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = FetchStatus.SUCCESS;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message ?? null;
      state.status = FetchStatus.FAILURE;
      state.data = undefined;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.status = FetchStatus.LOADING;
    });
  },
});

export const createUserSlice = (data?: UserData) => {
  if (data) {
    initialUserState = {
      data,
      status: FetchStatus.SUCCESS,
      error: null,
    };
  }
  return userSlice.reducer;
};

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
