import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../types/user';

const initialState: User = {
  personalInfo: {},
  isSignedIn: false,
  isAdmin: false,
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<boolean>) {
      state.isSignedIn = action.payload;
    },
    setAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
  },
});

export const { setUserState, setAdmin } = userDetailsSlice.actions;

export const userDetails = userDetailsSlice.reducer;
