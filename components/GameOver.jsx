import React from 'react'
import "./GameOver.css"

const GameOver = ({ tryAgain }) => {
    return (
        <div>
            <h1>GameOver</h1>
            <button onClick={tryAgain}>Voltar para o Inicio</button>
        </div>
    )
}

export default GameOver