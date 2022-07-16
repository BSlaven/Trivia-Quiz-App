import { configureStore } from '@reduxjs/toolkit';
import playerSlice from '../slices/playerSlice';
import quizSlice from '../slices/quizSlice';

const store = configureStore({
  reducer: {
    // modalSlice,
    player: playerSlice,
    quiz: quizSlice
  },
});

export default store