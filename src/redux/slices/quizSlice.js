import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfQuestions: [ 10, 15, 20 ],
  selectedNumber: 10,
  questions: [],
  currentQuestion: {},
  answers: [],
  currentIndex: 0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      if(state.questions.length > 0) return;
      state.questions = action.payload.questions;
      state.currentQuestion = state.questions[state.currentIndex];
      state.answers = [...state.currentQuestion.incorrect_answers]
        .map(answer => ({ answer, correct: false }));
      state.answers.push({ answer: state.currentQuestion.correct_answer, correct: true })
      state.answers = state.answers.sort(() => (Math.random() > 0.5 ? 1 : -1));
    },
    setNumberOfQuestions: (state, action) => {
      state.selectedNumber = action.payload.number;
    },
    clearQuestions: (state) => {
      state.questions = [];
      state.currentQuestion = {};
      state.currentIndex = 0;
      state.answers = []
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