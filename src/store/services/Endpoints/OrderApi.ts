import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const UserUrl = import.meta.env.VITE_AUTH_URL;

export const OrderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: UserUrl,
    credentials: 'include',
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ userId, page = 1, limit = 10, orderStatus, orderId }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params: Record<string, any> = {
          page,
          limit,
          orderStatus,
          orderId,
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

      // Separate endpoint for getOrderById
    }),

    getAllOrders: builder.query({
      query: (params) => `order/all?${new URLSearchParams(params).toString()}`,
      providesTags: (result) =>
        result ? [{ type: 'Orders', id: 'LIST' }] : [],
    }),
    getOrderById: builder.query({
      query: (orderId) => `order/getOrderById/${orderId}`,
      providesTags: (result, _error, orderId)  =>
        result ? [{ type: 'Orders', id: orderId }] : [],
    }),
    updateOrder: builder.mutation({
      query: ({ orderId, orderData }) => ({
        url: `order/update/${orderId}`,
        method: 'PUT',
        body: orderData,
      }),
  
      invalidatesTags: ( { orderId }) => [
        { type: 'Orders', id: 'LIST' },
        { type: 'Orders', id: orderId },
      ],
    }),
   
  }),
});

export const {
  useLazyGetOrdersQuery,
  useLazyGetAllOrdersQuery,
  useLazyGetOrderByIdQuery,
  useUpdateOrderMutation,
} = OrderApi;
