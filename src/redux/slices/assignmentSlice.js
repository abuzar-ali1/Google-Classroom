"use client";
import { createSlice } from '@reduxjs/toolkit';

const getInitialAssignments = () => {
  if (typeof window !== 'undefined') {
    const storedAssignments = localStorage.getItem('assignments');
    return storedAssignments ? JSON.parse(storedAssignments) : [];
  }
  return [];
};

const initialState = {
  assignments: getInitialAssignments(),
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('assignments', JSON.stringify(state.assignments));
      }
    },
    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(
        (a) => a.id === action.payload.id
      );
      if (index !== -1) {
        state.assignments[index] = action.payload;
        if (typeof window !== 'undefined') {
          localStorage.setItem('assignments', JSON.stringify(state.assignments));
        }
      }
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (a) => a.id !== action.payload
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('assignments', JSON.stringify(state.assignments));
      }
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
