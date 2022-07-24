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
    setSelectedNumberOfQuestions: (state, action) => {
      state.selectedNumber = action.payload.number;
    },
    clearQuestions: (state) => {
      state.questions = [];
    }
  }
})

export const { setSelectedNumberOfQuestions, clearQuestions } = quizSlice.actions;

export default quizSlice.reducer;