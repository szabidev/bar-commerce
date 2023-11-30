import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { userDetails } from './slices/user';
import { productsDetail } from './slices/products';
import { notifications } from './slices/notifications';
import { cartDetail } from './slices/cart';

const reducer = {
  userDetails,
  productsDetail,
  notifications,
  cartDetail,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type ComponentProps = {
  children: React.ReactNode;
};

export const AppStore = ({ children }: ComponentProps) => {
  return <Provider store={store}>{children}</Provider>;
};
