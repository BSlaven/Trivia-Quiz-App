import { calculatePercentage, increaseCorrectAnswers, increaseIncorrectAnswers } from "../redux/slices/playerSlice";

const Answer = ({ answer, increaseIndexByOne, isLastQuestion }) => {

  const answerClickHandler = (e, correct) => {

    correct ? increaseCorrectAnswers() : increaseIncorrectAnswers()
    if(isLastQuestion) {
      // call percentage calculation function
      calculatePercentage();
    }

    e.target.classList.add(`${correct ? 'correct' : 'wrong'}`);

    setTimeout(() => {
      increaseIndexByOne();
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