import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../api/consts';
import { UserRequest, UserResponse } from './types';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/user` }),
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation<UserResponse, UserRequest>({
      query: (profile) => ({
        url: `/profile`,
        body: profile,
        method: 'PUT',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useUpdateUserProfileMutation } = userAPI;
