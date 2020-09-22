import React, { useState, useEffect } from 'react';
import { calculateCells } from '../functions/calculateCells';

const GameController = props => {

  const { cells, setCells, initCells, setInitCells, clear } = props.cellProps;
  const [isRunning, setIsRunning] = useState(false);
  const [isClearOrStopped, setIsClearOrStopped] = useState(true);
  const [generations, setGenerations] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => step(), 50);
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
    setIsClearOrStopped(false);
  };

  const pauseGame = () => {
    setIsRunning(false);
  };

  const stopGame = () => {
    setIsRunning(false);
    setIsClearOrStopped(true);
    setGenerations(0);
    setCells(initCells);
  };

  const clearCells = () => {
    clear();
    setIsClearOrStopped(true);
  }

  return (
    <div className='GameController'>
      <div className='buttons'>
        <button disabled={isRunning} onClick={startGame}>Start</button>
        <button disabled={!isRunning} onClick={pauseGame}>Pause</button>
        <button disabled={isClearOrStopped} onClick={stopGame}>Stop</button>
        <br />
        <button disabled={isRunning} onClick={clearCells}>Clear Cells</button>
      </div>
      <p>Generations: {generations}</p>
    </div>
  );
};

export default GameController;