import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { numberOfQuestions } = useSelector(store => store.quiz);

  const startQuizHandler = () => {
    navigate('/quiz');
  }
  
  return (
    <div className='home'>
      {/* <h1 className="home-page-title">Select a number of choices and start the game</h1> */}
      <div className="question-number-container">
        {numberOfQuestions && numberOfQuestions.map(option => (
          <span key={option}>{option}</span>
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