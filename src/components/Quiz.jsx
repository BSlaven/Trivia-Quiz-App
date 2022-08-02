import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router"; 
import { useDispatch, useSelector } from "react-redux/es/exports"; 
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


const Quiz = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answerRefs = useRef([]);

  const { questions, selectedNumber, currentQuestion, currentIndex } = useSelector(store => store.quiz);

  const [ answers, setAnswers ] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=${selectedNumber}`);
      const resQuestions = await response.json();
      if(isMounted) {
        dispatch(setQuestions({ questions: resQuestions.results }))        
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    }
  }, []);

  useEffect(() => {
    if(!currentQuestion.question) return;
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
      const correct = answerRefs.current.find(answer => answer.textContent === currentQuestion.correct_answer);
      correct.classList.add('correct');
      dispatch(increaseIncorrectAnswers());
    }
    setTimeout(() => {
      if(questions.length === currentIndex + 1) {
        console.log('game over');
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
        <h3 className="question-text">{currentQuestion?.question}</h3>
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