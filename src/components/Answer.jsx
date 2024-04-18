import { useState } from "react";
import { setCurrentQuestionStatus, setCurrentIndex, setCurrentQuestion } from "../redux/slices/quizSlice";
import { useDispatch, useSelector } from "react-redux";

const Answer = ({ answer }) => {

  const [ answerClasses, setAnswerClasses] = useState('answer');
  // const [ isSelected, setIsSelected ] = useState(false);

  const { currentQuestion } = useSelector(store => store.quiz);

  const dispatch = useDispatch();

  const answerClickHandler = e => {

    // setIsSelected(true);
    setAnswerClasses(answer.correct ? 'answer correct' : 'answer wrong')
    
    dispatch(setCurrentQuestionStatus());
    setTimeout(() => {
      dispatch(setCurrentIndex());
      dispatch(setCurrentQuestion());
    }, 1000)
  }

  
  return (
    <span
      className={answerClasses}
      name={answer.correct ? 'true' : 'false'}
      onClick={(e) => answerClickHandler(e)}
    >
      {answer.answer}
    </span>
  )
}

export default Answer