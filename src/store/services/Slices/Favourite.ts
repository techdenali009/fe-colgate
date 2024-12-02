import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  productIds: string[]; // This state keeps track of favorite product IDs
}

const initialState: FavoritesState = {
  productIds: [], // Initial state is an empty array
};

const favoritesSlice = createSlice({
  name: 'favorites', // Unique name for the slice
  initialState,
  reducers: {
    // Reducer to add a product to favorites
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.productIds.includes(action.payload)) {
        state.productIds.push(action.payload); // Add product ID if it's not already in favorites
      }
    },
    // Reducer to remove a product from favorites
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.productIds = state.productIds.filter(id => id !== action.payload); // Remove the product ID
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions; // Export the actions
export default favoritesSlice.reducer; // Export the reducer for integration with the store
