import React from 'react'
import "./CurrentGame.css"
import Button from '@mui/material/Button';

const Game = ({ endGame }) => {
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className='tiph3'>
        Dica
      </h3>
      <div className='tip'>
        <span>Dica</span>
      </div>
      <div className='wordContainer'>
        <span className='letter'>T</span>
        <span className='blankSquare'>E</span>
        <span className='letter'>S</span>
        <span className='letter'>T</span>
        <span className='letter'>E</span>
      </div>
      <div className='letterContainer'>
        <form>
          <input placeholder="Guess a word" type="text" name='letter' maxLength={1} required ></input>
          <button className="button-3" role="button">Guess</button>
        </form>
      </div>
      <div className='wrongLettersContainer'>
        <div className='wrongTable'><p>Letras já utilizadas</p>
          <span className='wrongLetter'>a</span>
          <span className='wrongLetter'>b</span>
          <span className='wrongLetter'>e</span>
          <span className='wrongLetter'>f</span>
          <span className='wrongLetter'>g</span>
          <span className='wrongLetter'>h</span></div>
      </div>

    </div>

  )
}

export default Game