import { useState } from "react";
import { setCurrentQuestionStatus } from "../redux/slices/quizSlice";
import { useDispatch } from "react-redux";

const Answer = ({ answer }) => {

  const [ answerClasses, setAnswerClasses] = useState('answer');
  // const [ isSelected, setIsSelected ] = useState(false);

  const { currentQuestion } = useSelector(store => store.quiz);

  const dispatch = useDispatch();

  const answerClickHandler = e => {
    const { isCorrect } = e.target;
    
    // setIsSelected(true);
    setAnswerClasses(isCorrect ? 'answer correct' : 'answer wrong')
    
    dispatch(setCurrentQuestionStatus());
    
  }

  
  return (
    <span
      isCorrect={answer.correct}
      className={answerClasses}
      name={answer.correct ? 'true' : 'false'}
      onClick={(e) => answerClickHandler(e)}
    >
      {answer.answer}
    </span>
  )
}

export default Answer