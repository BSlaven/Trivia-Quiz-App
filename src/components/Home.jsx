import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      {/* <h1 className="home-page-title">Select a number of choices and start the game</h1> */}
      <div className="question-number-container">
        <span className="question-number ten selected">10</span>
        <span className="question-number fifteen">15</span>
        <span className="question-number twenty">20</span>
      </div>
      <button className="start-game-btn">Start Quiz</button>
    </div>
  )
}

export default Home