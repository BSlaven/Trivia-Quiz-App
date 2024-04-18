import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router"; 
import { useDispatch, useSelector } from "react-redux/es/exports"; 
import he from 'he';
import { 
  setNumberOfQuestions, 
  clearQuestions,
  setQuestions, 
  setCurrentIndex,
  setCurrentQuestion } from "../redux/slices/quizSlice";
import { 
  increaseCorrectAnswers,
  increaseIncorrectAnswers,
  calculatePercentage,
  resetValues
} from "../redux/slices/playerSlice";

import Answer from "./Answer";

const Quiz = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answerRefs = useRef([]);

  const { answers, questions, selectedNumber, currentQuestion, currentIndex } = useSelector(store => store.quiz);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if(isMounted) {
        const response = await fetch(`https://the-trivia-api.com/v2/questions?limit=${selectedNumber}`);
        const resQuestions = await response.json();
        // dispatch(setQuestions({ questions: resQuestions.results }))
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    }
  }, []);
  
  const quitAndReset = () => {
    navigate('/');
    dispatch(setNumberOfQuestions({ number: 10 }));
    dispatch(clearQuestions());
    dispatch(resetValues());
  }

  const answerClickHandler = (correct, index) => {
    if(correct) {
      answerRefs.current[index].classList.add('correct');
      dispatch(increaseCorrectAnswers());
    } else {
      answerRefs.current[index].classList.add('wrong');
      const correct = answerRefs.current.find(answer => answer.getAttribute('name') === 'true');
      correct.classList.add('correct');
      dispatch(increaseIncorrectAnswers());
    }
    cleanupAndNextQuestion();
  }

  const cleanupAndNextQuestion = () => {
    setTimeout(() => {
      [...answerRefs.current].forEach(elem => {
        if(elem) {
          elem.classList.remove('correct');
          elem.classList.remove('wrong');
        }
      })
      if(questions.length === currentIndex + 1) {
        dispatch(calculatePercentage());
        navigate('/stats');
        return
      }
      dispatch(setCurrentIndex());
      dispatch(setCurrentQuestion());
    }, 1500)
  }
  
  return (
    <main className="main">
      <div className="question-container">
        {questions && <p className="current-question-number">{`${currentIndex + 1} / ${questions.length}`}</p>}
        {currentQuestion.question && <h3 className="question-text">{he.decode(currentQuestion.question)}</h3>}
        <div className="answers-container">
          {answers && answers.map((answer, index) => (
            <>
              <Answer answer={answer} key={answer.answer} />
            </>
          ))}
        </div>
      </div>
      <button className="quit-btn" onClick={quitAndReset}>quit</button>
    </main>
  )
}

export default Quiz