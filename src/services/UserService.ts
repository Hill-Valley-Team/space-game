import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserData } from '../api/Auth';
import { baseUrl } from '../api/consts';
import { PasswordRequest, UserRequest, UserResponse } from './types';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation<UserResponse, UserRequest>({
      query: (profile) => ({
        url: '/user/profile',
        body: profile,
        method: 'PUT',
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
    updatePassword: builder.mutation<void, PasswordRequest>({
      query: (password) => ({
        url: '/user/password',
        body: password,
        method: 'PUT',
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
    getUserInfo: builder.query<UserData, void>({
      query: () => ({
        url: '/auth/user',
        credentials: 'include',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useUpdateUserProfileMutation, useGetUserInfoQuery, useUpdatePasswordMutation } =
  userAPI;
