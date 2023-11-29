import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  setNotification: false,
  setError: false,
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotification(state, { payload }: PayloadAction<boolean>) {
      state.setNotification = payload;
    },
    setError(state, { payload }: PayloadAction<boolean>) {
      state.setError = payload;
    },
  },
});

export const { setNotification, setError } = notificationSlice.actions;

export const notifications = notificationSlice.reducer;
