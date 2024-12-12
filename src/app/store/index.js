import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the cartSlice reducer

// Create the Redux store and pass in the reducer
export const store = configureStore({
  reducer: {
    cart: cartReducer, // The cart state is managed by the cartSlice reducer
  },
});
