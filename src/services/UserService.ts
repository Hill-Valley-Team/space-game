import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserData } from '../api/Auth';
import { baseUrl, signInRequestFields, signUpRequestFields } from '../api/consts';
import { SignInRequest, SignUpRequest } from '../api/types';
import { prepareDataToRequest } from '../controllers/utils/prepareDataToRequest';
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
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
    signin: builder.mutation<void, FormData>({
      query: (formData) => {
        const preparedData = prepareDataToRequest<SignInRequest>(signInRequestFields, formData);

        return {
          url: '/auth/signin',
          body: preparedData,
          method: 'POST',
          credentials: 'include',
        };
      },
      invalidatesTags: ['User'],
    }),
    signup: builder.mutation<void, FormData>({
      query: (formData) => {
        const preparedData = prepareDataToRequest<SignUpRequest>(signUpRequestFields, formData);

        return {
          url: '/auth/signup',
          body: preparedData,
          method: 'POST',
          credentials: 'include',
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useUpdateUserProfileMutation,
  useGetUserInfoQuery,
  useUpdatePasswordMutation,
  useLogoutMutation,
  useSigninMutation,
  useSignupMutation,
} = userAPI;
