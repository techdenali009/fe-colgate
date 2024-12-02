import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VisitedProductsState {
  productIds: string[];
}

const initialState: VisitedProductsState = {
  productIds: [],
};

const visitedProductsSlice = createSlice({
  name: 'visitedProducts',
  initialState,
  reducers: {
    addVisitedProduct: (state, action: PayloadAction<string>) => {
      if (!state.productIds.includes(action.payload)) {
        state.productIds.push(action.payload); // Add only if not already in the array
      }
    },
  },
});

export const { addVisitedProduct } = visitedProductsSlice.actions;

export default visitedProductsSlice.reducer;
