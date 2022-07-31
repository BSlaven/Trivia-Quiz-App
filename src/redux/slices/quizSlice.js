import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfQuestions: [ 10, 15, 20 ],
  selectedNumber: 10,
  questions: []
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload.questions
    },
    setNumberOfQuestions: (state, action) => {
      state.selectedNumber = action.payload.number;
    },
    clearQuestions: (state) => {
      state.questions = [];
    }
  }
})

export const { 
  setNumberOfQuestions,
  clearQuestions, 
  setQuestions 
} = quizSlice.actions;

export default quizSlice.reducer;