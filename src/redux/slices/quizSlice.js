import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfQuestions: [ 10, 13, 15 ]
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

  }
})

export default quizSlice.reducer;