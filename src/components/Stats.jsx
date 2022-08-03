import { useNavigate } from "react-router"; 
import { useSelector, useDispatch } from "react-redux/es/exports";
import { clearQuestions } from "../redux/slices/quizSlice";
import { resetValues } from "../redux/slices/playerSlice";

const Stats = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { correctAnswers, incorrectAnswers, percentage } = useSelector(store => store.player);

  const resetAndGoBackHome = () => {
    navigate('/');
    dispatch(resetValues());
    dispatch(clearQuestions());
  }
  
  return (
    <section className='stats-container'>
      <div className='stats-control'>
        <h3>Correct</h3>
        <p>{correctAnswers}</p>
      </div>
      <div className='stats-control'>
        <h3>Incorrect</h3>
        <p>{incorrectAnswers}</p>
      </div>
      <div className='stats-control'>
        <h3>Percentage</h3>
        <p>{percentage}</p>
      </div>
      <button onClick={resetAndGoBackHome}>Back Home</button>
    </section>
  )
}

export default Stats;