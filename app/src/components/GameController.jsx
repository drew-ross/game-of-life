import React, { useState, useEffect } from 'react';
import { calculateCells } from '../functions/calculateCells';

const GameController = props => {

  const { cells, setCells, initCells, setInitCells, clear, gridSize, setGridSize } = props.cellProps;
  const [isRunning, setIsRunning] = useState(false);
  const [isClearOrStopped, setIsClearOrStopped] = useState(true);
  const [generations, setGenerations] = useState(0);
  const [inputSize, setInputSize] = useState(gridSize);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => step(), 250);
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
  };

  const handleInput = e => {
    let input = Number(e.target.value);
    const min = Number(e.target.min);
    const max = Number(e.target.max);
    if (input < min) {
      input = min;
    }
    if (input > max) {
      input = max;
    }
    setInputSize(input);
  };

  const handleChangeGridSize = e => {
    setGridSize(inputSize);
  };

  return (
    <div className='GameController'>
      <div className='buttons'>
        <label>Board Size:
          <input
            min='4'
            max='30'
            value={inputSize}
            type='number'
            onChange={handleInput}
          ></input><span>x {inputSize}</span>
        </label><button onClick={handleChangeGridSize}>Set</button><br />
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