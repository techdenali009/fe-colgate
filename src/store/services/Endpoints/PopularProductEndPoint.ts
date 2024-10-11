import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PopularProductsEndpoints = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/PopularProducts',
    }),
  }),
});

export const { useGetProductsQuery } = PopularProductsEndpoints;