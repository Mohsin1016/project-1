import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "Cart",
  initialState: { display: false, showSignUp: true , showSignIn : false , LogOut : true},
  reducers: {
    displayCart(state) {
      state.display = true;
    },
    displaySignUp(state) {
      state.showSignUp = false;
    },
    displaySignIn(state){
      state.showSignIn = true;
    },
    displayLogOut(state){
      state.LogOut = false;
    }
  },
});

export const displayAction = displaySlice.actions;
export default displaySlice;
