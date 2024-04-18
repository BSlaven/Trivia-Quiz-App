const Answer = ({ answer }) => {

  const answerClickHandler = () => {

  }

  console.log(answer);
  
  return (
    <span
      className="answer"
      name={answer.correct ? 'true' : 'false'}
      onClick={() => answerClickHandler(answer.correct, index)}
    >
      {he.decode(answer.answer)} 
    </span>
  )
}

export default Answer