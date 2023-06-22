import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(existingItem);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          thumbnail: newItem.thumbnail,
          price: newItem.price,
        });

        state.totalQuantity++;
        state.totalPrice += action.payload.price;
      } else {
        alert("You already have this game in your cart!");
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => {
        item.id === newItem.id;
      });
      state.totalQuantity--;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalPrice -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
