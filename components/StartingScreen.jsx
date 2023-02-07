import React from 'react';
import "./StartingScreen.css"

const StartingScreen = () => {
    return (
        <div className='StartScreen'>
            <h1 className='title'>Guess the <strong>WORD</strong></h1>
            <p>Click on the botton below to start</p>
            <button class="button-49" role="button">BEGIN</button>
        </div>
    )
}

export default StartingScreen