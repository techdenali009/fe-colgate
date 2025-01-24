import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const AuthUrl = import.meta.env.VITE_AUTH_URL;

export const AuthApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${AuthUrl}` , credentials:'include'}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: '/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: loginData,

      }),
    }),
    verifyAccount: builder.query({
      query: (token) => `/users/email/verifyToken?token=${token}`,
    }),
    
    userlogout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET', // Adjusted to GET if necessary, or you can change it to POST if needed.
      }),

    }),
    
    changepassword: builder.mutation({
      query: (data) => ({
        url: '/changepassword',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data, // Payload for changing the password
      }),
    }),
   
  }),
});


export const { useLoginMutation, useLazyVerifyAccountQuery, useUserlogoutMutation,useChangepasswordMutation} = AuthApi;
