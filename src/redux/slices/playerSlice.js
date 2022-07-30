import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  percentage: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    increaseCorrectAnswers: (state, action) => {
      state.correctAnswers = state.correctAnswers + 1
    },
    increaseIncorrectAnswers: (state, action) => {
      state.incorrectAnswers = state.incorrectAnswers + 1
    }
  }
});

export const { increaseCorrectAnswers, increaseIncorrectAnswers } = quizSlice.actions;

export default playerSlice.reducer;