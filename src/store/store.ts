// store.ts
import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './services/Slices/ModalSlice';
import ReviewFormModal from './services/Slices/ReviewFormModalSlice';

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    reviewFormModal: ReviewFormModal

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
