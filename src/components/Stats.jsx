import { useNavigate } from "react-router"; 
import { useSelector } from "react-redux/es/exports";

const Stats = () => {
  return (
    <section className='stats-container'>
      <div className='stats-control'>
        <h3>Correct</h3>
        <p>number of correct answers</p>
      </div>
      <div className='stats-control'>
        <h3>Incorrect</h3>
        <p>number of incorrect answers</p>
      </div>
      <div className='stats-control'>
        <h3>Percentage</h3>
        <p>correctnes percentage</p>
      </div>
      <button>Back Home</button>
    </section>
  )
}

export default Stats;