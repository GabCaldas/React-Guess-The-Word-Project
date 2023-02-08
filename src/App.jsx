import { useState } from 'react'

// CSS
import './App.css'
import StartingScreen from '../components/StartingScreen'
import CurrentGame from '../components/CurrentGame'
import GameOver from '../components/GameOver'

// DATA
import { wordsList } from "./data/words.jsx"


const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },

];


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  //START THE GAME
  const startGame = () => {
    setGameStage(stages[1].name)
  }


  //END THE GAME
  const endGame = () => {
    setGameStage(stages[2].name)
  }
  //RESTART THE GAME
  const tryAgain = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartingScreen startGame={startGame} />}
      {gameStage === "game" && <CurrentGame endGame={endGame} />}
      {gameStage === "end" && <GameOver tryAgain={tryAgain} />}
    </div>
  )
}

export default App
