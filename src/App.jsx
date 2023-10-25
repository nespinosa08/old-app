import { useState } from 'react';
import './App.css'
import { Board } from './assets/component/Board';
import { MoveButton } from './assets/component/MoveButton';


export const App = () => {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = (currentMove%2===0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares)=>{
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }

  const handleJump = (nextMove)=>{
    setCurrentMove(nextMove);
}
  
  return (
    <>
      <div className="game-board">
      <Board xIsNext={xIsNext}  squares={currentSquares} onPLay={handlePlay}/>
      </div>
      
      <div className="game-info">
      <MoveButton history={history} onJump={handleJump}/>
      </div>

    </>
  )
}





