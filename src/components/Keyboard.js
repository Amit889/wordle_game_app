import React, { useCallback, useEffect,useContext } from 'react'
import Keys from './Keys';
import { AppContext } from '../App';

function Keyboard() {
  const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const keys2 = ["A","S","D","F","G","H","J","K","L"];
  const keys3 = ["Z","X","C","V","B","N","M"];

  const {onEnter,
    onDelete,
    onSelectKey,
    disabledLetters
    } = useContext(AppContext);
const handleKeyboard = useCallback((event)=>{
  
  if(event.key === "Enter"){
    onEnter();
  }else if(event.key === "Backspace"){
    onDelete();
  }else{
     keys1.forEach((key)=>{
      if(event.key.toLowerCase() === key.toLowerCase()){
        onSelectKey(key);
      }
     })
     keys2.forEach((key)=>{
      if(event.key.toLowerCase() === key.toLowerCase()){
        onSelectKey(key);
      }
     })
     keys3.forEach((key)=>{
      if(event.key.toLowerCase() === key.toLowerCase()){
        onSelectKey(key);
      }
     })
  }
});

useEffect(()=>{
  document.addEventListener("keydown",handleKeyboard);

  return ()=>{
    document.removeEventListener("keydown",handleKeyboard);
  };
},[handleKeyboard]);



  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line1'>
        {keys1.map((key)=>{
          return <div key={key}><Keys keyVal={key} disabled={disabledLetters.includes(key)}/></div>
        })}
      </div>
      <div className='line2'>
        {keys2.map((key)=>{
          return <div key={key}><Keys keyVal={key} disabled={disabledLetters.includes(key)}/></div>
        })}
      </div>
      <div className='line3'>
        <Keys keyVal={"Enter"}/>
        {keys3.map((key)=>{
          return <div key={key}><Keys keyVal={key} disabled={disabledLetters.includes(key)}/></div>
        })}
        <Keys keyVal={"Delete"}/>
      </div>
    </div>
  ) 
}

export default Keyboard;