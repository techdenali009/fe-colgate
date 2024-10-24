import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './services/Slices/ModalSlice';
import authSlice from './services/Slices/authSlice'; 
import { AuthApi } from './services/Endpoints/AuthApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default to localStorage for web
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  modal: ModalSlice,
  authSlice: authSlice,
  [AuthApi.reducerPath]: AuthApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage, 
  blacklist: [AuthApi.reducerPath], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(AuthApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
