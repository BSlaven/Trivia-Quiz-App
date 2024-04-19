import { useState } from "react";
import { setCurrentQuestionStatus, setCurrentIndex, setCurrentQuestion } from "../redux/slices/quizSlice";
import { useDispatch, useSelector } from "react-redux";

const Answer = ({ answer }) => {

  const [ answerClasses, setAnswerClasses] = useState('answer');

  const { currentQuestion } = useSelector(store => store.quiz);

  const dispatch = useDispatch();

  const answerClickHandler = (e, correct) => {
    dispatch(setCurrentQuestionStatus());
    setAnswerClasses(answer.correct ? 'answer correct' : 'answer wrong');
    
    setTimeout(() => {
      dispatch(setCurrentIndex());
      dispatch(setCurrentQuestion());

    }, 1000)
  }

  
  return (
    <span
      className={answerClasses}
      name={answer.correct ? 'true' : 'false'}
      onClick={(e) => answerClickHandler(e, answer.correct)}
    >
      {answer.answer}
    </span>
  )
}

export default Answer