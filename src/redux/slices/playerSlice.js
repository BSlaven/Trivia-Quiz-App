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
    },
    resetValues: (state, action) => {
      state.correctAnswers = 0;
      state.incorrectAnswers = 0;
      state.percentage = 0;
    },
    calculatePercentage: (state, action) => {
      const totalAnswers = state.correctAnswers + state.incorrectAnswers;
      const percentage = (state.correctAnswers / totalAnswers) * 100;
      state.percentage = percentage;
    }
  }
});

export const { 
  increaseCorrectAnswers, 
  increaseIncorrectAnswers, 
  resetValues,
  calculatePercentage
} = quizSlice.actions;

export default playerSlice.reducer;