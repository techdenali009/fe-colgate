
import { configureStore } from '@reduxjs/toolkit';
import { PopularProductsEndpoints } from './services/PopularProductEndPoint';

const store = configureStore({
  reducer: {
    [PopularProductsEndpoints.reducerPath]: PopularProductsEndpoints.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PopularProductsEndpoints.middleware), 
});

export default store;
