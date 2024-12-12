import { createSlice } from "@reduxjs/toolkit";

// Define initial state of the cart
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [], 
};

// Create a Redux slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add item to cart
    addToCart: (state, action) => {
      const item = action.payload;
      const itemExists = state.items.find(existingItem => existingItem.id === item.id);

      if (itemExists) {
        itemExists.quantity += item.quantity
      } else {
        state.items.push(item);
      }
      // Store cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
        // Action to update quantity of an item in cart
        updateQuantity: (state, action) => {
          const { id, quantity } = action.payload;
          const item = state.items.find(item => item.id === id);
          if (item) {
            item.quantity = quantity; // Update the quantity in Redux state
          }
          localStorage.setItem("cartItems", JSON.stringify(state.items)); // Update localStorage
        },
    // Action to remove item from cart
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      // Update localStorage after removing item
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

// Export actions and reducer
export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
