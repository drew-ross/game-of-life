import React, { useState, useEffect } from 'react';

const GameController = props => {

  const { cells, setCells, initCells, setInitCells, clear } = props.cellProps;
  const [isRunning, setIsRunning] = useState(false);
  const [generations, setGenerations] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => step(), 1000);
      return () => clearInterval(interval);
    }
  });

  const step = () => {
    setGenerations(generations + 1);
  };

  const startGame = () => {
    setIsRunning(true);
  };

  const pauseGame = () => {
    setIsRunning(false);
  };

  const stopGame = () => {
    setIsRunning(false);
    setGenerations(0)
  };

  return (
    <div className='GameController'>
      <div className='buttons'>
        <button onClick={startGame}>Start</button>
        <button onClick={pauseGame}>Pause</button>
        <button onClick={stopGame}>Stop</button>
        <button onClick={clear}>Clear</button>
      </div>
      <p>Generations: {generations}</p>
    </div>
  );
};

export default GameController;