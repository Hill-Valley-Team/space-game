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

export const fetchUserTheme = createAsyncThunk('theme/fetch', async () => {
  const response = await userThemeApi.getUserTheme();
  return response.data;
});

export const updateUserTheme = createAsyncThunk('theme/set', async (themeId: number) => {
  const setResponse = await userThemeApi.setUserTheme(themeId);
  if (setResponse.data === 'Created') {
    const getResponse = await userThemeApi.getUserTheme();
    return getResponse.data;
  }
});

export const updateLocalUserTheme = createAsyncThunk('theme/setLocal', async (themeId: number) => {
  const getResponse = await themeApi.getTheme(themeId);
  return getResponse.data;
});

export const fetchOrCreateUserTheme = createAsyncThunk(
  'theme/fetchOrCreate',
  async (themeId: number) => {
    const getResponse = await userThemeApi.getUserTheme();
    if (getResponse.data === null) {
      const addResponse = await userThemeApi.addUserTheme(themeId);
      if (addResponse.data === 'Created') {
        const createdResponse = await userThemeApi.getUserTheme();
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

    builder.addCase(updateLocalUserTheme.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = FetchStatus.SUCCESS;
    });
    builder.addCase(updateLocalUserTheme.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = FetchStatus.FAILURE;
      state.data = undefined;
    });
    builder.addCase(updateLocalUserTheme.pending, (state) => {
      state.status = FetchStatus.LOADING;
    });
  },
});
