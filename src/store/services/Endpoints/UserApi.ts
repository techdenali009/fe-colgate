import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const UserUrl = import.meta.env.VITE_AUTH_URL;

export const UserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: UserUrl,
    credentials: 'include',
  }),
  tagTypes: ['User', 'MyFavList','Order'], 
  endpoints: (builder) => ({
    // Fetch users
    getUsers: builder.query({
      query: ({ search, page, limit }) => ({
        url: '/users',
        params: { search, page, limit },
      }),
      providesTags: [{ type: 'User', id: 'LIST' }], 
    }),

    // Delete a user
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }], 
    }),

    // Add a new user
    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/users/create',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }], 
    }),

    //edit user
    editUser: builder.mutation({
      query: ({ id, updatedUser }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: updatedUser,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    
    //Get USer By Id
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: [{ type: 'User', id: 'LIST' }],
    }),

    getFavouriteProducts: builder.query({
      query: (id) => ({
        url: `/users/favorite/${id}`,
      }),
      providesTags: ['MyFavList'],
    }),
    
    addfavourite : builder.mutation({
      query: (data) => ({
        url: '/users/addProductToFavorite',
        method: 'POST',
        body: data, 
      }),
      invalidatesTags:['MyFavList']
    }),

    createorder: builder.mutation({
      query: (data) => ({
        url: '/order/create',
        method: 'POST',
        body: data, // Payload for changing the password
      }),
      invalidatesTags:['Order']
    }),

  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useAddUserMutation,
  useEditUserMutation,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useLazyGetFavouriteProductsQuery,
  useAddfavouriteMutation,useCreateorderMutation
} = UserApi;
