import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './services/Slices/ModalSlice';
import authSlice from './services/Slices/authSlice'; 
import { AuthApi } from './services/Endpoints/AuthApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';
import { UserApi } from './services/Endpoints/UserApi';
import { PlpProductsEndpoints } from './services/Endpoints/PlpProductsEndPoint';
import { categoryApi } from './services/Endpoints/CategoryApi';


const rootReducer = combineReducers({
  modal: ModalSlice,
  authSlice: authSlice,
  [AuthApi.reducerPath]: AuthApi.reducer,
  [PlpProductsEndpoints.reducerPath]: PlpProductsEndpoints.reducer,
  [UserApi.reducerPath]: UserApi.reducer, 
  [categoryApi.reducerPath]: categoryApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage, 
  blacklist: [AuthApi.reducerPath, UserApi.reducerPath,categoryApi.reducerPath], 
  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(AuthApi.middleware, UserApi.middleware,PlpProductsEndpoints.middleware,categoryApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
