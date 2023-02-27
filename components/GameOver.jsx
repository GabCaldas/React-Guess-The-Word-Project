import React from 'react'
import "./GameOver.css"

const GameOver = ({ tryAgain, score }) => {
    return (
        <div>
            <h1>Game Over!</h1>
            <button onClick={tryAgain}>Voltar para o Inicio</button>
            <h2>Sua pontuação foram {score} pontos!</h2>

        </div>

    )
}

export default GameOver