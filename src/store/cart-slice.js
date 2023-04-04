import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cart: [],
    cartChanged: false,
  },
  reducers: {
    getItems(state, action) {
      state.items = action.payload.items;
    },
    getCartItems(state, action) {
      state.cart = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      const cartItem = {
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        mainImg: newItem.main_img,
        quantity: 1,
      };
      state.cartChanged = true;
      if (!existingItem) {
        state.cart.push(cartItem);
      } else {
        existingItem.quantity++;
      }
    },
    removeCartItem(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      state.cartChanged = true;
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
