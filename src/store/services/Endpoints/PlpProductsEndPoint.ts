import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { makeUrlWithQueryParams } from '@utils/appFunctions';

// Define the API service
export const PlpProductsEndpoints = createApi({
  reducerPath: 'productsApi', // Reducer name for Redux store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://be-colgate.onrender.com/api' }), // Base URL for API
  endpoints: (builder) => ({
    // Define the getProducts query
    getProducts: builder.query({
      query: (params) => {
        console.log('params', params)
        // makeUrlWithQueryParams('/products', params)
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
  }),
});

// Export the auto-generated hook for use in components
export const { useLazyGetProductsQuery } = PlpProductsEndpoints;
