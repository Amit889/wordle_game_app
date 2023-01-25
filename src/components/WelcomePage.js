import React,{useContext} from 'react'
import Button from '@mui/material/Button';
import { AppContext } from '../App'

function WelcomePage() {
    const {setStart} = useContext(AppContext);
    const runGame = ()=>{
        setInterval(() => {
            setStart(true);
          }, 800);  
    }
  return (
    <div className='welcome_div'>
        <div className="image_div" >
        </div>
        <Button id="welcome_btn" variant="contained" color="success" onClick={runGame}>
           Start
      </Button>
    </div>
  )
}

export default WelcomePage