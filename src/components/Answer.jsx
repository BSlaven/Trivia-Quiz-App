import { calculatePercentage, increaseCorrectAnswers, increaseIncorrectAnswers } from "../redux/slices/playerSlice";

const Answer = ({ answer, increaseIndexByOne, isLastQuestion }) => {

  const answerClickHandler = (e, correct) => {

    correct ? increaseCorrectAnswers() : increaseIncorrectAnswers()
    
    e.target.classList.add(`${correct ? 'correct' : 'wrong'}`);

    setTimeout(() => {
      if(!isLastQuestion) {
        increaseIndexByOne();
      }
      e.target.classList.remove(`${correct ? 'correct' : 'wrong'}`);
    }, 1000)
  }

  
  return (
    <span
      className='answer'
      name={answer.correct ? 'true' : 'false'}
      onClick={(e) => answerClickHandler(e, answer.correct)}
    >
      {answer.answer}
    </span>
  )
}

export default Answer