import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopItem } from '../../types/products';

const initialState = {
  cartItems: [] as ShopItem[],
  totalItems: 0,
};

const cartProductsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, { payload }: PayloadAction<ShopItem>) {
      const existingItem = state.cartItems.find((item) => item.id === payload.id);

      if (existingItem) {
        existingItem.totalAmount! += 1;
      } else {
        state.cartItems.push({ ...payload, totalAmount: 1 });
      }

      state.totalItems = state.cartItems.reduce(
        (total, item) => total + (item.totalAmount || 0),
        0,
      );
    },
    removeProductFromCart(state, { payload }: PayloadAction<ShopItem>) {
      const existingItem = state.cartItems.find((item) => item.id === payload.id);

      if (existingItem) {
        existingItem.totalAmount! -= 1;
        if (existingItem.totalAmount === 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
        }
      }

      state.totalItems = state.cartItems.reduce(
        (total, item) => total + (item.totalAmount || 0),
        0,
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartProductsSlice.actions;

export const cartDetail = cartProductsSlice.reducer;
