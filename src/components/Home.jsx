import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNumberOfQuestions } from "../redux/slices/quizSlice";

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { numberOfQuestions, selectedNumber } = useSelector(store => store.quiz);

  const startQuizHandler = () => {
    navigate('/quiz');
  }

  const selectNumberOfQuestions = number => {
    dispatch(setSelectedNumberOfQuestions({ number }))
  }
  
  return (
    <div className='home'>
      {/* <h1 className="home-page-title">Select a number of choices and start the game</h1> */}
      <div className="question-number-container">
        {numberOfQuestions && numberOfQuestions.map(option => (
          <span
            className={`${selectedNumber === option ? 'question-number selected' : 'question-number'}`}
            onClick={() => selectNumberOfQuestions(option)}
            key={option}>
            {option}
          </span>
        ))}
      </div>
      <button 
        className="start-game-btn"
        onClick={startQuizHandler}>
          Start Quiz
      </button>
    </div>
  )
}

export default Home