// REACT
import React from 'react';


// CSS
import "./StartingScreen.css"


const StartingScreen = ({ startGame }) => {
    return (
        <div className='StartScreen'>
            <h1 className='title'>Guess the <strong>WORD</strong></h1>
            <p>Click on the button below to start</p>
            <button onClick={startGame} className="button-49" role="button">BEGIN</button>
        </div>
    )
}

export default StartingScreen