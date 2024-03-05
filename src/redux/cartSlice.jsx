import { createSlice } from '@reduxjs/toolkit';
import cartData from '../data/cartData.json';

const initialState = {
  cartData: [],
  totalPrice: 0,
  isCartPanelOn: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const item = action.payload;
      const id = action.payload.id;
      const repeatedItem = state.cartData.find(
        (cartItem) => cartItem.id === id
      );
      if (!repeatedItem) state.cartData.push(item);
      else repeatedItem.amount += 1;
    },
    increaseCartItem: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartData.find((cartItem) => cartItem.id === id);
      cartItem.amount += 1;
    },
    decreaseCartItem: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartData.find((cartItem) => cartItem.id === id);
      cartItem.amount -= 1;
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      state.cartData = state.cartData.filter((cartItem) => cartItem.id !== id);
    },
    calculateTotal: (state) => {
      let totalPrice = 0;
      state.cartData.forEach((cartItem) => {
        totalPrice += cartItem.amount * Number(cartItem.productPrice);
        console.log(cartItem.productPrice);
        console.log(totalPrice);
      });
      state.totalPrice = totalPrice.toFixed(2);
      console.log(state.totalPrice);
    },
    openCartPanel: (state) => {
      state.isCartPanelOn = true;
    },
    closeCartPanel: (state) => {
      state.isCartPanelOn = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  addCartItem,
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
  calculateEach,
  calculateTotal,
  openCartPanel,
  closeCartPanel,
} = cartSlice.actions;
