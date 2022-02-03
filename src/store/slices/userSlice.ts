import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from 'api/Auth';
import { FetchStatus } from 'store/consts';
import { RootState } from 'store/types';
import { UserState } from './types';

const initialUserState: UserState = {
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

export const { resetUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
