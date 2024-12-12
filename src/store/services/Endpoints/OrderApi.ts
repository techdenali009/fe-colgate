import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const UserUrl = import.meta.env.VITE_AUTH_URL;

export const OrderApi = createApi({
  reducerPath: 'orderApi',
  
  baseQuery: fetchBaseQuery({
    baseUrl: UserUrl,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ userId, page = 1, limit = 10, orderStatus,orderId }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params: Record<string, any> = { 
          page, 
          limit,
          orderStatus,
          orderId
        };
        
        return {
          url: `/order/${userId}`,
          params,
        };
      },
      
      onQueryStarted: async (_arg, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log('Order response data:', data);
        } catch (error) {
          console.error('Error fetching order data:', error);
        }
      },
    }),
    getAllOrders: builder.query({
      query: (params) => `order/all?${new URLSearchParams(params).toString()}`,
    
    }),
  }),
});

export const { useLazyGetOrdersQuery,useLazyGetAllOrdersQuery } = OrderApi;