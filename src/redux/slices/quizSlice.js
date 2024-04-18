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
      console.log(action.payload);
      state.questions = action.payload.questions;
      state.currentQuestion = state.questions[state.currentIndex];
      state.answers = [...state.currentQuestion.incorrectAnswers]
      .map(answer => ({ answer, correct: false }));
      state.answers.push({ answer: state.currentQuestion.correctAnswer, correct: true })
      state.answers = state.answers.sort(() => (Math.random() > 0.5 ? 1 : -1));
    },
    setNumberOfQuestions: (state, action) => {
      state.selectedNumber = action.payload.number;
    },
    setCurrentQuestionStatus: (state, action) => {
      state.currentQuestion.isAnswered = true
    },
    clearQuestions: (state) => {
      state.questions = [];
      state.currentQuestion = {};
      state.currentIndex = 0;
      state.answers = []
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = state.questions[state.currentIndex]
      state.answers = [...state.currentQuestion.incorrectAnswers]
      .map(answer => ({ answer, correct: false }));
      state.answers.push({ answer: state.currentQuestion.correctAnswer, correct: true })
      state.answers = state.answers.sort(() => (Math.random() > 0.5 ? 1 : -1));
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
  setCurrentQuestion,
  setCurrentQuestionStatus,
} = quizSlice.actions;

export default quizSlice.reducer;