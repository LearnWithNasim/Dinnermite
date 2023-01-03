import cartSlice from "./shopping-cart/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import cartUiSlice from "./shopping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice,
  },
});

export default store;
