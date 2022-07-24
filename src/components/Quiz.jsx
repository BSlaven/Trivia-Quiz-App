import { useState } from "react";
import { useNavigate } from "react-router"; 
import { setNumberOfQuestions, clearQuestions } from "../redux/slices/quizSlice";
import { useDispatch } from "react-redux/es/exports"; 
import data from '../data.json'

const Quiz = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ questions, setQuestions ] = useState(data.results);
  const [ currentIndex, setCurrentIndex ] = useState(1);
  const [ currentQuestion, setCurrentQuestion ] = useState(questions[currentIndex])

  const routeBackHome = () => {
    navigate('/');
    dispatch(setNumberOfQuestions({ number: 10 }));
    dispatch(clearQuestions());
  }
  
  return (
    <main className="main">
      <div className="question-container">
        <h3 className="question-text">{currentQuestion.question}</h3>
        <div className="answers-container">
          {currentQuestion.incorrect_answers && currentQuestion.incorrect_answers.map(answer => (
            <span className="answer" key={answer}>{answer}</span>
          ))}
        </div>
      </div>
      <button className="quit-btn" onClick={routeBackHome}>quit</button>
    </main>
  )
}

export default Quiz