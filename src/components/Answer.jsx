import { useState, useRef } from "react";
import { setCurrentQuestionStatus, setCurrentIndex, setCurrentQuestion } from "../redux/slices/quizSlice";
import { useDispatch, useSelector } from "react-redux";

const Answer = ({ answer, increaseIndexByOne }) => {

  const answerRef = useRef();

  const answerClickHandler = (e, correct) => {

    e.target.classList.add(`${correct ? 'correct' : 'wrong'}`);

    setTimeout(() => {
      increaseIndexByOne();
      e.target.classList.remove(`${correct ? 'correct' : 'wrong'}`);
    }, 1000)
  }

  
  return (
    <span
      ref={answerRef}
      className='answer'
      name={answer.correct ? 'true' : 'false'}
      onClick={(e) => answerClickHandler(e, answer.correct)}
    >
      {answer.answer}
    </span>
  )
}

export default Answer