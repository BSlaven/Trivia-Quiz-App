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
    setNumberOfQuestions: (state, action) => {
      state.selectedNumber = action.payload.number;
    },
    clearQuestions: (state) => {
      state.questions = [];
      state.currentQuestion = {};
      state.currentIndex = 0;
      state.answers = []
    }
  }
})

export const { 
  setNumberOfQuestions,
  clearQuestions, 
  setQuestions,
} = quizSlice.actions;

export default quizSlice.reducer;