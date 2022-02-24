import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { themeApi } from 'api/Theme/ThemeApi';
import { FetchStatus } from 'store/consts';
import { ThemeState } from './types';

export const createThemeSlice = (themeId?: number) => {};

const initialState: ThemeState = {
  data: undefined,
  error: undefined,
  status: FetchStatus.IDLE,
};

export const fetchUserTheme = createAsyncThunk('theme/fetch', async (userId: number) => {
  const response = await themeApi.getUserTheme(userId);
  return response.data;
});

export const setUserTheme = createAsyncThunk(
  'theme/set',
  async (userData: { userId: number; themeId: number }) => {
    const { userId, themeId } = userData;
    const response = await themeApi.setUserTheme(userId, themeId);
    return response.data;
  },
);

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.data = action.payload.themeId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserTheme.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = FetchStatus.SUCCESS;
    });
    builder.addCase(fetchUserTheme.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = FetchStatus.FAILURE;
      state.data = undefined;
    });
    builder.addCase(fetchUserTheme.pending, (state) => {
      state.status = FetchStatus.LOADING;
    });

    builder.addCase(setUserTheme.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = FetchStatus.SUCCESS;
    });
    builder.addCase(setUserTheme.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = FetchStatus.FAILURE;
      state.data = undefined;
    });
    builder.addCase(setUserTheme.pending, (state) => {
      state.status = FetchStatus.LOADING;
    });
  },
});
