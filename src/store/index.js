import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfo.slice";
import cart from "./slices/cart.slice";

export const store = configureStore({
  reducer: {
    userInfo,
    cart,
  },
});
