import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { makeUrlWithQueryParams } from '@utils/appFunctions';

// Define the API service
export const PlpProductsEndpoints = createApi({
  reducerPath: 'productsApi', // Reducer name for Redux store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://be-colgate.onrender.com/api' ,credentials:'include'}), // Base URL for API
  endpoints: (builder) => ({
    // Define the getProducts query
    getProducts: builder.query({
      query: (params) => {
        console.log('params', params)
        makeUrlWithQueryParams('/products', params)
        return `/products?${params}` ; // Append formatted query string to the endpoint
      },
      transformResponse: (response: {
        data: {
          currentPage: number,
          hasMore: boolean,
          products: []
          totalCount: number
          totalPages: number
        }
      }) => {
        console.log('transform', response);
        return response?.data || {
          currentPage: 0,
          hasMore: false,
          products: [],
          totalCount: 0,
          totalPages: 0
        };
      },
      // transformResponse((res)=>{
      //   return resizeBy;
      // })
    }),

    getProductById: builder.query({
      query: (id: string) => `/products/${id}`,
      transformResponse: (response: {
        data: {
          product: {
            id: string;
            name: string;
            price: number;
            description: string;
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            [key: string]: any; // Allow for other dynamic fields
          };
        };
      }) => {
        console.log('transform product', response);
        return response?.data?.product || null;
      },
    }),

    addfavourite : builder.mutation({
      query: (data) => ({
        url: '/users/addProductToFavorite',
        method: 'POST',
        body: data, // Payload for changing the password
      }),
    }),

  }),
});

// Export the auto-generated hook for use in components
export const { useLazyGetProductsQuery,useAddfavouriteMutation ,useLazyGetProductByIdQuery} = PlpProductsEndpoints;