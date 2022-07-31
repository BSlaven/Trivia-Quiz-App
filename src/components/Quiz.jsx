import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router"; 
import { useDispatch } from "react-redux/es/exports"; 
import { setNumberOfQuestions, clearQuestions } from "../redux/slices/quizSlice";
import { 
  increaseCorrectAnswers,
  increaseIncorrectAnswers,
  calculatePercentage,
  resetValues
} from "../redux/slices/playerSlice";

import data from '../data.json'

const Quiz = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answerRefs = useRef([]);

  const [ questions, setQuestions ] = useState(data.results);
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ currentQuestion, setCurrentQuestion ] = useState(questions[currentIndex]);
  const [ answers, setAnswers ] = useState(null);

  // useEffect(() => {
  //   dispatch();
  // }, []);
 
  useEffect(() => {
    setCurrentQuestion(questions[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    const allAnswers = combineAnswers(currentQuestion)
    setAnswers(allAnswers);
  }, [currentQuestion]);

  const combineAnswers = ({ correct_answer, incorrect_answers }) => {
    const newArray = [...incorrect_answers];
    newArray.push(correct_answer);
    newArray.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return newArray;
  }
  
  const routeBackHome = () => {
    navigate('/');
    dispatch(setNumberOfQuestions({ number: 10 }));
    dispatch(clearQuestions());
    dispatch(resetValues());
  }

  const answerClickHandler = (answer, index) => {
    if(answer === currentQuestion.correct_answer) {
      answerRefs.current[index].classList.add('correct');
      dispatch(increaseCorrectAnswers());
    } else {
      answerRefs.current[index].classList.add('wrong');
      dispatch(increaseIncorrectAnswers());
    }
    setTimeout(() => {
      setCurrentIndex(index => index + 1);
    }, 1000)
  }
  
  return (
    <main className="main">
      <div className="question-container">
        <p className="current-question-number">{`${currentIndex + 1} / ${questions.length}`}</p>
        <h3 className="question-text">{currentQuestion.question}</h3>
        <div className="answers-container">
          {answers && answers.map((answer, index) => (
            <span 
              className="answer"
              ref={el => answerRefs.current[index] = el}
              key={answer}
              onClick={() => answerClickHandler(answer, index)}>
                {answer}
            </span>
          ))}
        </div>
      </div>
      <button className="quit-btn" onClick={routeBackHome}>quit</button>
    </main>
  )
}

export default Quiz