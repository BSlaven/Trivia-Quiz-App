import { configureStore } from '@reduxjs/toolkit';
import playerSlice from '../slices/playerSlice';
import quizSlice from '../slices/quizSlice';

export const store = configureStore({
  reducer: {
    // modalSlice,
    playerSlice,
    quizSlice
  },
});