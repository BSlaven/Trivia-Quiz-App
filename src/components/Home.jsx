import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="question-number-container">
        <span className="question-number ten">10</span>
        <span className="question-number ten">15</span>
        <span className="question-number ten">20</span>
      </div>
      <button className="start-game-btn">Start Game</button>
    </div>
  )
}

export default Home