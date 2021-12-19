import { createAction } from '@reduxjs/toolkit';

export const userStartFetchData = createAction('USER_START_FETCH_DATA');
export const userSuccessFetchData = createAction('USER_SUCCESS_FETCH_DATA');
export const userFailedFetchData = createAction('USER_FAILED_FETCH_DATA');
export const userEndFetchData = createAction('USER_END_FETCH_DATA');
