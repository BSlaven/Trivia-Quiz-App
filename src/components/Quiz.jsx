import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; 
import { setNumberOfQuestions, clearQuestions } from "../redux/slices/quizSlice";
import { useDispatch } from "react-redux/es/exports"; 
import data from '../data.json'

const Quiz = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ questions, setQuestions ] = useState(data.results);
  const [ currentIndex, setCurrentIndex ] = useState(1);
  const [ currentQuestion, setCurrentQuestion ] = useState(questions[currentIndex]);
  const [ answers, setAnswers ] = useState(null);

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
  
  function routeBackHome() {
    navigate('/');
    dispatch(setNumberOfQuestions({ number: 10 }));
    dispatch(clearQuestions());
  }
  
  return (
    <main className="main">
      <div className="question-container">
        <h3 className="question-text">{currentQuestion.question}</h3>
        <div className="answers-container">
          {answers && answers.map(answer => (
            <span className="answer" key={answer}>{answer}</span>
          ))}
        </div>
      </div>
      <button className="quit-btn" onClick={routeBackHome}>quit</button>
    </main>
  )
}

export default Quiz