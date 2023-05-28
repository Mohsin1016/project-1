import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import displaySlice from "./DisplayCart";

const store = configureStore({
  reducer: { item: itemSlice.reducer, display: displaySlice.reducer },
});
export default store;
