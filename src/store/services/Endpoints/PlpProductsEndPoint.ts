import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PlpProductsEndpoints = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://be-colgate.onrender.com/api',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryString) => {
        console.log('params', queryString);
        // makeUrlWithQueryParams("/products", params); // Assuming this function formats the query parameters
        return `/products?${queryString}`; // Append formatted query string to the endpoint
      },
      transformResponse: (response: {
        data: {
          currentPage: number;
          hasMore: boolean;
          products: [];
          totalCount: number;
          totalPages: number;
        };
      }) => {
        console.log('transform', response);
        return (
          response?.data || {
            currentPage: 0,
            hasMore: false,
            products: [],
            totalCount: 0,
            totalPages: 0,
          }
        );
      },
    }),
    
  }),
});

// Export the auto-generated hooks for both APIs
export const {  useLazyGetProductsQuery } =
  PlpProductsEndpoints;
