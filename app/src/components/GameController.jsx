import React, { useState, useEffect } from 'react';
import { calculateCells } from '../functions/calculateCells';

const GameController = props => {

  const { cells, setCells, initCells, setInitCells, clear, gridSize, setGridSize } = props.cellProps;
  const [isRunning, setIsRunning] = useState(false);
  const [isClearOrStopped, setIsClearOrStopped] = useState(true);
  const [generations, setGenerations] = useState(0);
  const [inputSize, setInputSize] = useState(gridSize);
  const [speedInterval, setSpeedInterval] = useState(500);
  const [speedRange, setSpeedRange] = useState(2);

  useEffect(() => {
    if (isRunning) {
      console.log(speedInterval);
      const interval = setInterval(() => step(), speedInterval);
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

  const handleRange = e => {
    if (!isRunning) {
      setSpeedRange(Number(e.target.value));
      switch (Number(e.target.value)) {
        case 1:
          setSpeedInterval(1000);
          break;
        case 2:
          setSpeedInterval(500);
          break;
        case 3:
          setSpeedInterval(200);
        default:
          break;
      }
    }
  };

  return (
    <div className='GameController'>
      <div className='buttons'>
        <label>Board Size:
          <br />
          <input
            type='number'
            min='4'
            max='30'
            value={inputSize}
            onChange={handleInput}
          ></input><span>x {inputSize}</span>
        </label><button onClick={handleChangeGridSize}>Set</button><br />
        <label>Speed:
          <br />
          <input
            type='range'
            min='1'
            max='3'
            value={speedRange}
            onChange={handleRange}></input>
        </label><br />
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