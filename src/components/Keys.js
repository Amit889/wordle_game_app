import React, {useContext} from 'react'
import { AppContext } from '../App';

const Keys = ({keyVal,disabled}) => {
    
    const {onEnter,
           onDelete,
           onSelectKey
           } = useContext(AppContext);

    const selectLetter =()=>{
     
      if(keyVal==="Enter"){
        onEnter();
      }else if(keyVal==="Delete"){
         onDelete();
      }else{
        onSelectKey(keyVal);
      }
    }
  return (
    <div className='key' id={disabled?"disabled":""}
    onClick={selectLetter}>{keyVal}</div>
  )
}

export default Keys
