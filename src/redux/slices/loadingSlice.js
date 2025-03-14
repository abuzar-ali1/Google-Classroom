"use client";
import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: { isLoadData: true },
  reducers: {
    setLoading: (state, action) => {
      state.isLoadData = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
