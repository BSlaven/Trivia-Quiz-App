import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfQuestions: [ 10, 15, 20 ],
  selectedNumber: 10,
  questions: [],
  currentQuestion: {},
  currentIndex: 0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload.questions;
      state.currentQuestion = state.questions[state.currentIndex]
    },
    setNumberOfQuestions: (state, action) => {
      state.selectedNumber = action.payload.number;
    },
    clearQuestions: (state) => {
      state.questions = [];
      state.currentQuestion = {};
      state.currentIndex = 0;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = state.questions[state.currentIndex]
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = state.currentIndex + 1
    }
  }
})

export const { 
  setNumberOfQuestions,
  clearQuestions, 
  setQuestions,
  setCurrentIndex,
  setCurrentQuestion
} = quizSlice.actions;

export default quizSlice.reducer;