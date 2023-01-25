import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import { createContext, useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import WelcomePage from "./components/WelcomePage";

export const AppContext = createContext();

function App() {
  const [board, setboard] = useState(boardDefault);
  const [position, setposition] = useState({ row: 0, col: -1 });
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [start,setStart] = useState(false);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  //console.log("correct word: "+correctWord);
  useEffect(() => {
    generateWordSet().then((Obj) => {
      setCorrectWord(Obj.todaysWord.toUpperCase().trim());
    });
  }, []);

  const onEnter = () => {
    if (position.col < 4) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[position.row][i];
    }

    setposition({ row: Math.min(position.row + 1, 6), col: -1 });

    if (currWord === correctWord) {
      console.log("true");
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (position.row + 1 === 6 && position.col === 4) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };
  const onDelete = () => {
    if (position.col === -1) return;
    // console.log("row: "+position.row+" col: "+position.col);
    const newboard = [...board];

    newboard[position.row][position.col] = "";
    setboard(newboard);
    setposition({ row: position.row, col: position.col - 1 });
  };
  const onSelectKey = (keyVal) => {
    if (position.row === 6 || position.col === 4) return;
    // console.log("row: "+position.row+" col: "+position.col);
    const newboard = [...board];

    newboard[position.row][position.col + 1] = keyVal;
    setboard(newboard);
    setposition({ row: position.row, col: position.col + 1 });
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle Game 🤔</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setboard,
          position,
          setposition,
          onEnter,
          onDelete,
          onSelectKey,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
          setStart
        }}
      >
        <div className="game">
          {start?<><Board />
                {gameOver.gameOver ? <GameOver /> : <Keyboard />}
                </> 
              :<WelcomePage/>}
          
          
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
