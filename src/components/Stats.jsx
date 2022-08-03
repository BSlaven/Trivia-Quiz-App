import { useNavigate } from "react-router"; 
import { useSelector } from "react-redux/es/exports";

const Stats = () => {

  const navigate = useNavigate();
  const { correctAnswers, incorrectAnswers, percentage } = useSelector(store => store.player);
  
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
      <button>Back Home</button>
    </section>
  )
}

export default Stats;