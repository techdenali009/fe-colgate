import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const AuthUrl = import.meta.env.VITE_AUTH_URL;

interface Category {
  _id: string;
  name: string;
  description: string;
  subcategories: {
    _id: string;
    name: string;
    description: string;
  }[];
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${AuthUrl}` }), 
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/categories',
      transformResponse: (response: { data: Category[] }) => response.data
    }),
    getSubCategories: builder.query<{ [key: string]: string[] }, void>({
      query: () => '/subcategories',
      transformResponse: (response: { data: Category[] }) => {
        return response.data.reduce((acc, category) => {
          acc[category.name] = category.subcategories.map(sub => sub.name);
          return acc;
        }, {} as { [key: string]: string[] })
      }
    }),
  }),
});

export const { useLazyGetCategoriesQuery, useLazyGetSubCategoriesQuery } = categoryApi;