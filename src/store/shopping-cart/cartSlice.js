import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const exitingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!exitingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        exitingItem.quantity++;
        exitingItem.totalPrice =
          Number(exitingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    // remove item /

    removeItem(state, action) {
      const id = action.payload;
      const exitingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (exitingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        exitingItem.quantity--;
        exitingItem.totalPrice =
          Number(exitingItem.totalPrice) - Number(exitingItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    // -- // delete item // ----

    deleteItem(state, action) {
      const id = action.payload;
      const exitingItem = state.cartItems.find((item) => item.id === id);

      if (exitingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - exitingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
