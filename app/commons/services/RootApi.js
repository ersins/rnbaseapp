import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
    prepareHeaders: (headers, {getState}) => {
      // userToken var ise headers a ekleyerek api çağrısı yapacak
      const token = getState().auth.userToken;
      if (token) {
        headers.set('authentication', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation({
      query: () => 'protected',
    }),
    getUsers: builder.mutation({
      query: () => ({
        url: 'users',
        method: 'GET',
        // body: credentials,
      }),
    }),
  }),
});

export const {useLoginMutation, useProtectedMutation, useGetUsersMutation} =
  rootApi;
