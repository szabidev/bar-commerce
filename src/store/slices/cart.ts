import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopItem } from '../../types/products';

const initialState = {
  cartProducts: [] as ShopItem[],
};

const cartProductsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, { payload }: PayloadAction<ShopItem>) {
      state.cartProducts.push(payload);
    },
  },
});

export const { addProductToCart } = cartProductsSlice.actions;

export const cartDetail = cartProductsSlice.reducer;
