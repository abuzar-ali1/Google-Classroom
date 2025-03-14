"use client";

import { configureStore } from '@reduxjs/toolkit';
import assignmentsReducer from './slices/assignmentSlice';
import loadingReducer from './slices/loadingSlice';

export const store = configureStore({
  reducer: {
    assignments: assignmentsReducer,
    loading:loadingReducer,
    
  },
});