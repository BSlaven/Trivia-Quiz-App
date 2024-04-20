import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router"; 
import { useDispatch, useSelector } from "react-redux/es/exports"; 
import { 
  setNumberOfQuestions, 
  clearQuestions,
  setQuestions, 
} from "../redux/slices/quizSlice";
import { 
  calculatePercentage,
  resetValues,
} from "../redux/slices/playerSlice";

import Answer from "./Answer";

const Quiz = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { questions, selectedNumber } = useSelector(store => store.quiz);
  const { percentage } = useSelector(store => store.player);
  
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const currentQuestion = questions[currentIndex];

  const correctAnswer = { answer: currentQuestion?.correctAnswer, correct: true }
  const incorrectAnswers = currentQuestion?.incorrectAnswers.map(answer => {
    return {
      answer: answer,
      correct: false
    }
  })

  const answers = [correctAnswer, ...incorrectAnswers ];

  const increaseIndexByOne = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }

  const endGameHanlder = () => {
    dispatch(calculatePercentage())
  }

  useEffect(() => {
    if(currentIndex === 0) return
    endGameHanlder();
  }, [percentage])
  
  useEffect(() => {
    endGameHanlder();
  }, [questions])

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if(isMounted) {
        const response = await fetch(`https://the-trivia-api.com/v2/questions?limit=${selectedNumber}`);
        const resQuestions = await response.json();
        const mappedQuestions = resQuestions.map(question => ({
          question: question.question.text,
          correctAnswer: question.correctAnswer,
          incorrectAnswers: question.incorrectAnswers,
          id: question.id
        }))

        console.log(mappedQuestions);

        dispatch(setQuestions({ questions: mappedQuestions }))
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
  
  return (
    <main className="main">
      <div className="question-container">
        {questions && <p className="current-question-number">{`${currentIndex + 1} / ${questions.length}`}</p>}
        {currentQuestion?.question && <h3 className="question-text">{currentQuestion?.question}</h3>}
        <div className="answers-container">
          {answers && answers.map((answer, index) => (
            <>
              <Answer answer={answer} isLastQuestion={(index + 1 === questions.length)} key={answer} increaseIndexByOne={increaseIndexByOne} />
            </>
          ))}
        </div>
      </div>
      <button className="quit-btn" onClick={quitAndReset}>quit</button>
    </main>
  )
}

export default Quiz