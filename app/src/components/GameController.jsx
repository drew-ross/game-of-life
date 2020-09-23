import React, { useState, useEffect } from 'react';
import { calculateCells } from '../functions/calculateCells';

const GameController = props => {

  const { cells, setCells, initCells, setInitCells, clear, gridSize, setGridSize } = props.cellProps;
  const [isRunning, setIsRunning] = useState(false);
  const [isClear, setIsClear] = useState(true);
  const [generations, setGenerations] = useState(0);
  const [inputSize, setInputSize] = useState(gridSize);
  const [speedInterval, setSpeedInterval] = useState(500);
  const [speedRange, setSpeedRange] = useState(2);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => step(), speedInterval);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    setInputSize(gridSize);
  }, [gridSize]);

  const step = () => {
    setCells(calculateCells(cells));
    setGenerations(generations + 1);
  };

  const startGame = () => {
    if (isClear) {
      setInitCells(cells);
    }
    setIsRunning(true);
    setIsClear(false);
  };

  const pauseGame = () => {
    setIsRunning(false);
  };

  const stopGame = () => {
    setIsRunning(false);
    setIsClear(true);
    setGenerations(0);
    setCells(initCells);
  };

  const clearCells = () => {
    clear();
    setIsClear(true);
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
          setSpeedInterval(150);
        default:
          break;
      }
    }
  };

  return (
    <div className='GameController'>
      <div className='flex-row'>
        <button className='_primary' disabled={isRunning} onClick={startGame}>Start</button>
        <br />
        <button disabled={!isRunning} onClick={pauseGame}>Pause</button>
        <br />
        <button disabled={isClear} onClick={stopGame}>Stop</button>
      </div>
      <br />
      <div className='flex-row'>
        <div className='container _small _noselect'>
          <label>Size:
        <br />
            <input
              type='number'
              min='4'
              max='30'
              value={inputSize}
              onChange={handleInput}
            ></input>
          </label>
        </div>
        <br />
        <button onClick={handleChangeGridSize}>Resize</button>
        <br />
        <div className='container _small _vmargin _noselect'>
          <label>Speed {speedRange}
            <br />
            <input
              type='range'
              min='1'
              max='3'
              value={speedRange}
              onChange={handleRange}
              disabled={isRunning}
            ></input>
          </label>
        </div>
      </div>
      <br />
      <div className='flex-row'>
        <button className='_secondary' disabled={isRunning} onClick={clearCells}>Clear</button>
        <p className='container _small'>
          <span className='font-smaller'>Generations:</span>
          <br />
          <span className='font-bigger'>{generations}</span>
        </p>
      </div>
    </div>
  );
};

export default GameController;