import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { themeApi } from 'api/Theme/ThemeApi';
import { userThemeApi } from 'api/Theme/UserThemeApi';
import { FetchStatus } from 'store/consts';
import { ThemeState } from './types';

export const createThemeSlice = () => {};

const initialState: ThemeState = {
  data: undefined,
  error: undefined,
  status: FetchStatus.IDLE,
};

export const getTheme = createAsyncThunk('theme/get', async (themeId: number) => {
  const response = await themeApi.getTheme(themeId);
  return response.data;
});

export const fetchUserTheme = createAsyncThunk('theme/fetch', async (userId: number) => {
  const response = await userThemeApi.getUserTheme(userId);
  return response.data;
});

export const updateUserTheme = createAsyncThunk(
  'theme/set',
  async (userData: { userId: number; themeId: number }) => {
    const { userId, themeId } = userData;
    if (userId === 0) {
      const getResponse = await themeApi.getTheme(themeId);
      return getResponse.data;
    } else {
      const setResponse = await userThemeApi.setUserTheme(userId, themeId);
      if (setResponse.data === 'Created') {
        const getResponse = await userThemeApi.getUserTheme(userId);
        return getResponse.data;
      }
    }
  },
);

export const fetchOrCreateUserTheme = createAsyncThunk(
  'theme/fetchOrCreate',
  async (userData: { userId: number; themeId: number }) => {
    const { userId, themeId } = userData;
    const getResponse = await userThemeApi.getUserTheme(userId);
    if (getResponse.data === null) {
      const addResponse = await userThemeApi.addUserTheme(userId, themeId);
      if (addResponse.data === 'Created') {
        const createdResponse = await userThemeApi.getUserTheme(userId);
        return createdResponse.data;
      }
    }
    return getResponse.data;
  },
);

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeData(state, action) {
      state.data = action.payload;
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

    builder.addCase(updateUserTheme.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = FetchStatus.SUCCESS;
    });
    builder.addCase(updateUserTheme.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = FetchStatus.FAILURE;
      state.data = undefined;
    });
    builder.addCase(updateUserTheme.pending, (state) => {
      state.status = FetchStatus.LOADING;
    });

    builder.addCase(fetchOrCreateUserTheme.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = FetchStatus.SUCCESS;
    });
    builder.addCase(fetchOrCreateUserTheme.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = FetchStatus.FAILURE;
      state.data = undefined;
    });
    builder.addCase(fetchOrCreateUserTheme.pending, (state) => {
      state.status = FetchStatus.LOADING;
    });
  },
});
