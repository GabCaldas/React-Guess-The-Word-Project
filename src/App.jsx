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

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])



  const pickWordAndCategory = () => {
    // PICK A RANDOM CATEGORY 
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category)

    // PICK A RANDOM WORD
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return { word, category }
  }


  //START THE GAME
  const startGame = () => {
    // PICK WORD AND CATEGORY
    const { word, category } = pickWordAndCategory()

    //CREATE AN ARRAY OF LETTERS
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())
    setGameStage(stages[1].name)


    //FILL STATES
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

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
