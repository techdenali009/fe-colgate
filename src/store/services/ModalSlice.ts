// modalSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isLoginModalOpen: boolean;
}

const initialState: ModalState = {
  isLoginModalOpen: false,
};

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleLoginModel(state) {
      state.isLoginModalOpen = !state.isLoginModalOpen;
    },
  },
});

export const { toggleLoginModel } = ModalSlice.actions;
export default ModalSlice.reducer;
