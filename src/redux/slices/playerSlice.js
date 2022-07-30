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
    
  }
})

export default playerSlice.reducer;