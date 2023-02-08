import React from 'react'
import "./CurrentGame.css"

const Game = ({ endGame }) => {
  return (
    <div>Game
      <div>
        <button onClick={endGame}>fim</button>
      </div>
    </div>

  )
}

export default Game