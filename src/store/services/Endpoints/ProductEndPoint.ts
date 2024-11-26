import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const UserUrl = import.meta.env.VITE_AUTH_URL;

export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: UserUrl,
    credentials: 'include', 
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, limit }) => ({
        url: '/products',
        params: { page, limit }, // Passing the pagination params
      }),
    
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = ProductsApi;
