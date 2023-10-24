import { useState } from 'react'
import './App.css'
import { Square } from './assets/component/Square'
import { calculateWinner } from './assets/helpers/calculateWinner';


export const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
    
  const handleClick = (i)=>{
    if (squares[i] || winner) {
      return
    } 
    const nextSquares = squares.slice();
    if  (xIsNext){
      nextSquares[i]='X'
    } else{
      nextSquares[i]='O'
    }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
  };
  
  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = `GANADOR: ${winner}`
  } else{
    status = `Juega ${xIsNext? 'X': 'O'}`
  }
  
  
  return (
    <>
      <h1>ViejaAPP</h1>
  
      <h2 className='status'>{status}</h2>
  
      <div className='board-row'>
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
      </div>
  
      <div className='board-row'>
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
      </div>
      
      <div className='board-row'>
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
      </div>
    </>
  )
}





