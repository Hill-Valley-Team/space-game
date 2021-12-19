import { createReducer } from '@reduxjs/toolkit';
import {
  userEndFetchData,
  userFailedFetchData,
  userStartFetchData,
  userSuccessFetchData,
} from './actions';
import { UserState } from './types';

const initialState: UserState = {
  data: null,
  loading: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userStartFetchData, (state) => {
      state.loading = true;
    })
    .addCase(userSuccessFetchData, (state, action) => {
      state.loading = false;
      state.data = action.payload!;
    })
    .addCase(userFailedFetchData, (state) => {
      state.loading = false;
    })
    .addCase(userEndFetchData, (state) => {
      state.loading = false;
    })
    .addDefaultCase(() => {});
});
