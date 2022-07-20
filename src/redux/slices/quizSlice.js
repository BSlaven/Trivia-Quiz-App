import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfQuestions: [ 10, 15, 20 ],
  selectedNumber: 10
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSelectedNumberOfQuestions: (state, action) => {
      state.selectedNumber = action.payload.number;
    }
  }
})

export const { setSelectedNumberOfQuestions } = quizSlice.actions;

export default quizSlice.reducer;