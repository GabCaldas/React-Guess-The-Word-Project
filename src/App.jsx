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

    // PICK A RANDOM WORD
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return { word, category }
  }


  //START THE GAME
  const startGame = () => {

    setGameStage(stages[1].name)
    // PICK WORD AND CATEGORY
    const { word, category } = pickWordAndCategory()

    //CREATE AN ARRAY OF LETTERS
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(word, category)
    console.log(wordLetters)


    //FILL STATES
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

  }



  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)
  //PROCESS THE LETTER INPUT 
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
    }
  };
  console.log(guessedLetters)
  console.log(wrongLetters)
  //RESTART THE GAME
  const tryAgain = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartingScreen startGame={startGame} />}
      {gameStage === "game" && <CurrentGame
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        letters={letters}
        score={score} />}
      {gameStage === "end" && <GameOver tryAgain={tryAgain} />}
    </div>
  )
}

export default App
