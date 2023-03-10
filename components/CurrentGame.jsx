import React, { useState, useRef } from 'react'
import "./CurrentGame.css"

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, wrongLetters, guessedLetters, guesses, score }) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus()
  };
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação:{score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <p>Você tem {guesses} tentativas</p>
      <h3 className='tiph3'>
        Dica
      </h3>
      <div className='tip'>
        <span>{pickedCategory}</span>
      </div>
      <div className='wordContainer'>
        {letters.map((letter, id) => (
          guessedLetters.includes(letter) ? (
            <span key={id} className='letter'>{letter}</span>)
            :
            (
              <span key={id} className='blankSquare'></span>
            )
        ))}
      </div>
      <div className='letterContainer'>
        <form onSubmit={handleSubmit}>
          <input
            ref={letterInputRef}
            onChange={(e) =>
              setLetter(e.target.value)}
            value={letter} type="text" name='letter' maxLength={1} required ></input>
          <button className="button-3" role="button">Guess</button>
        </form>
      </div>
      <div className='wrongLettersContainer'>
        <div className='wrongTable'>
          <p>Letras já utilizadas</p>
          {wrongLetters.map((letter, id) => (
            <span className='wrongLetter' key={id}>{letter}</span>
          ))}
        </div>
      </div>

    </div>

  )
}

export default Game