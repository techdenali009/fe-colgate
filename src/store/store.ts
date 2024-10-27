// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ModalSlice from './services/Slices/ModalSlice';
import authSlice from './services/Slices/authSlice';
import { AuthApi } from './services/Endpoints/AuthApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import ReviewFormModal from './services/Slices/ReviewFormModalSlice';

// Combine all reducers, including `reviewFormModal`
const rootReducer = combineReducers({
  modal: ModalSlice,
  authSlice: authSlice,
  reviewFormModal: ReviewFormModal, // Add reviewFormModal to the root reducer
  [AuthApi.reducerPath]: AuthApi.reducer,
});

// Configure persistence with redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [AuthApi.reducerPath], // Prevent persisting API cache
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create a single store with the persisted reducer and middleware for the API
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(AuthApi.middleware),
});

export const persistor = persistStore(store);

// Export types for use with useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
