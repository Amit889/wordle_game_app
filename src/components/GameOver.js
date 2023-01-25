import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {correctWord,position,gameOver,setGameOver,} = useContext(AppContext);
    const h3color = gameOver.guessedWord?'lightgreen':'red';
   // console.log("color : "+h3color);
  return (
    <div className='gameOver'>
        <h3 style={{color:h3color}} >
          {gameOver.guessedWord?"You Correctly guessed!":"You failed!"}</h3>
        <h1>Correct Word is : <span>{correctWord}</span></h1>
        {gameOver.guessedWord&&(<h3> You guessed in {position.row-1} attempt</h3>)}
        </div>
  )
}

export default GameOver