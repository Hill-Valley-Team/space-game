import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi, UserData } from 'api/Auth';
import { FetchStatus } from 'store/consts';
import { ThemeState, UserSlice, UserState } from './types';

export const createThemeSlice = (themeId?: number) => {};

const initialState: ThemeState = {
  id: undefined,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.id = action.payload;
    },
  },
});
