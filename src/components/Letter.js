import React, {useContext, useEffect} from 'react'
import {AppContext} from "../App"


function Letter({letterPos,attemptVal}) {
    const {board,
          correctWord,
          position,
          setDisabledLetters} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    
    var letterState = "";
    if(position.row>attemptVal){
      const correct = correctWord[letterPos]=== letter;
      const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  
     letterState =  (position.row*5+position.col) >= (attemptVal*5 + letterPos) &&
      (correct ? "correct" : almost ? "almost" : "error");
    }  
    
    useEffect(()=>{
       if(letter!=="" && letterState!=="correct" && letterState!=="almost"){
         setDisabledLetters((prev)=>[...prev,letter]);
       }
    },[position.row]);
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter