import { createSlice } from "@reduxjs/toolkit";
const storedData = localStorage.getItem("items");
const parsedData = storedData ? JSON.parse(storedData) : [];
const itemSlice = createSlice({
  name: "item",
  initialState: { items: parsedData },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      console.log(state);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price * 1,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity; // update totalPrice
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.price * existingItem.quantity; // update totalPrice
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const itemAction = itemSlice.actions;
export default itemSlice;
