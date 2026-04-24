// import * as React from 'react'
// import * as ReactBootstrap from 'react-bootstrap'
import { useState } from 'react'

function Square({value, onSquareClick}) {
  return (
    <button 
      className="square"
      onClick={() => {onSquareClick()}}
    >
     {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  const [numTurns, setNumTurns] = useState(0);
  const [selected, setSelected] = useState(null); //whether smth has been selected or not
  
  function handleClick(i) {
    const player = xIsNext ? "X" : "O";

    if (numTurns<6){
      if (squares[i] || calculateWinner(squares)) return;
      const nextSquares = squares.slice();
      nextSquares[i] = player; // hehe cleaner
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
      setNumTurns(numTurns+1);
    }

    else{
      // click 1 
        if (selected === null) { //selection click has happened
          if (squares[i] === player){
            console.log("smth selecetd");
            setSelected(i);
          }
          return; // nothing happens
        }
      // click 2
        if (i === selected){ //clicked same piece
          setSelected(null);
          return
        }
        if (squares[i] !== null || !isAdjacent(i, selected)){
          console.log("bad move");
          setSelected(null); //bad move, reset!
          return;
        }
        if (squares[i] === null){
          const nextSquares = squares.slice();
          nextSquares[selected] = null;
          nextSquares[i] = player;

          if (squares[4] === player && selected !== 4) {
          if (calculateWinner(nextSquares) !== player) {
            setSelected(null);
            return;
          }
          } 
          
          setSquares(nextSquares);
          setXIsNext(!xIsNext);
          setNumTurns(numTurns+1);
          setSelected(null); // oooh bug fix
        }
        return;
    }
    }
    

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isAdjacent(a, b) {
  if (a === b) return false;         
  const rowA = Math.floor(a / 3);
  const colA = a % 3;
  const rowB = Math.floor(b / 3);
  const colB = b % 3;
  return Math.abs(rowA - rowB) <= 1 && Math.abs(colA - colB) <= 1;
}