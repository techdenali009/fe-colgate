import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const AuthUrl = import.meta.env.VITE_AUTH_URL;

export const PlpProductsEndpoints = createApi({
  reducerPath: 'productsApi', // Reducer name for Redux store
  baseQuery: fetchBaseQuery({ baseUrl: AuthUrl ,credentials:'include'}), // Base URL for API
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
            images: {url:string, alt:string}[];
            restrictedmessage: string;
            features: string[];
            bySkinConcern: string[];
            bySkinType: string[];
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
    getRelativeProducts: builder.query({
      query:(params)=>`products/getReletive?${new URLSearchParams(params).toString()}`
    }),
    getRecentlyViewedProducts: builder.mutation({
      query: ({ productIds, page, limit }: { productIds:  string[] ; page: number; limit: number }) => ({
        url: `/products/recently-viewedProducts?${new URLSearchParams({ page: String(page), limit: String(limit) }).toString()}`,
        method: 'POST',
        body: { productIds }, // Send productIds object containing productsIds array in the body
      }),
    }),
  }),
});

// Export the auto-generated hook for use in components
export const { useLazyGetProductsQuery,useAddfavouriteMutation ,useLazyGetProductByIdQuery,useLazyGetRelativeProductsQuery,useGetRecentlyViewedProductsMutation} = PlpProductsEndpoints;
