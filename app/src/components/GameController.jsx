import React, { useState, useEffect } from 'react';
import { calculateCells } from '../functions/calculateCells';

const GameController = props => {

  const { cells, setCells, initCells, setInitCells, clear } = props.cellProps;
  const [isRunning, setIsRunning] = useState(false);
  const [generations, setGenerations] = useState(0);
  const [cellBuffer, setCellBuffer] = useState(cells);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => step(), 200);
      return () => clearInterval(interval);
    }
  });

  const step = () => {
    setCells(calculateCells(cells));
    setGenerations(generations + 1);
  };

  const startGame = () => {
    setInitCells(cells);
    setIsRunning(true);
  };

  const pauseGame = () => {
    setIsRunning(false);
  };

  const stopGame = () => {
    setIsRunning(false);
    setGenerations(0);
    setCells(initCells);
    setCellBuffer(initCells);
  };

  return (
    <div className='GameController'>
      <div className='buttons'>
        <button disabled={isRunning} onClick={startGame}>Start</button>
        <button disabled={!isRunning} onClick={pauseGame}>Pause</button>
        <button onClick={stopGame}>Stop</button>
        <br />
        <button disabled={isRunning} onClick={clear}>Clear Cells</button>
      </div>
      <p>Generations: {generations}</p>
    </div>
  );
};

export default GameController;