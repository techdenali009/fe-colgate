import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  discount:number
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const AddTocartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      
      const existingItem = state.items.find(item => item.id === action.payload.id);
     
      if (existingItem) {
        existingItem.quantity += 1;
      } else { 
        state.items.push({ ...action.payload, quantity: 1 });
      }
     
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      console.log('Cart Items After Removal:', state.items); // Log cart state
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        if (action.payload.quantity < 1) {
          // Remove item if quantity drops to 0
          state.items = state.items.filter(i => i.id !== item.id);
        } else {
          item.quantity = action.payload.quantity;
        }
      }  
    },
    clearCart: (state) => {
      state.items = [];
      console.log('Cart Cleared:', state.items); // Log cart state
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = AddTocartSlice.actions;

// Selector to get the details of products in the cart
export const selectCartDetails = (state: { addtocart: CartState }) => state.addtocart.items;

export default AddTocartSlice.reducer;
