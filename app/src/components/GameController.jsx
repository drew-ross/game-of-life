import React, { useState, useEffect } from 'react';
import { calculateCells } from '../functions/calculateCells';

const speed1 = 500;
const speed2 = 250;
const speed3 = 1;
const minGrid = 4;
const maxGrid = 30;

const GameController = props => {

  const { cells, setCells, initCells, setInitCells, clear, gridSize, setGridSize } = props.gameProps;
  const [isRunning, setIsRunning] = useState(false);
  const [isClear, setIsClear] = useState(true);
  const [generations, setGenerations] = useState(0);
  const [inputSize, setInputSize] = useState(gridSize);
  const [speedInterval, setSpeedInterval] = useState(speed2);
  const [speedRange, setSpeedRange] = useState(2);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => step(), speedInterval);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    setInputSize(gridSize);
    setGenerations(0);
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
    setInputSize(input);
  };

  const handleChangeGridSize = e => {
    e.preventDefault();
    let input = inputSize;
    if (input < minGrid) {
      input = minGrid;
    }
    if (input > maxGrid) {
      input = maxGrid;
    }
    setGridSize(input);
  };

  const handleRange = e => {
    if (!isRunning) {
      setSpeedRange(Number(e.target.value));
      switch (Number(e.target.value)) {
        case 1:
          setSpeedInterval(speed1);
          break;
        case 2:
          setSpeedInterval(speed2);
          break;
        case 3:
          setSpeedInterval(speed3);
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
            <form onSubmit={handleChangeGridSize}>
              <input
                type='number'
                min={minGrid}
                max={maxGrid}
                value={inputSize}
                onChange={handleInput}
              ></input>
            </form>
          </label>
        </div>
        <br />
        <button disabled={isRunning} onClick={handleChangeGridSize}>Resize</button>
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