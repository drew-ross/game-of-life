import React, { useState, useEffect } from 'react';
import Header from './Header';
import Grid from './Grid';
import GameController from './GameController';
import PresetList from './PresetList';
import About from './About';
import { useCells } from '../hooks/useCells';

const containerSize = 600;

const App = () => {

  const [mouseDown, setMouseDown] = useState(false);
  const [cells, setCells, changeCell, gridSize, cellSize] = useCells();
  const [initCells, setInitCells] = useCells(gridSize);
  const [currentXY, setCurrentXY] = useState({ row: null, col: null });
  const [cellTo, setCellTo] = useState(false);

  useEffect(() => {
    if (mouseDown) {
      changeCell(currentXY.row, currentXY.col, cellTo);
    }
    // eslint-disable-next-line
  }, [currentXY, mouseDown]);

  const cellClick = (isAlive, isMouseDown) => {
    setCellTo(isAlive);
    setMouseDown(isMouseDown);
  };

  const gridProps = {
    containerSize,
    cells,
    gridSize,
    cellSize,
    setCurrentXY,
    cellClick,
    setMouseDown,
  };

  const gameProps = {
    cells,
    setCells,
    initCells,
    setInitCells,
    gridSize,
  };

  return (
    <div className='App'>
      <Header />
      <div className='css-grid'>
        <GameController gameProps={gameProps} />
        <Grid gridProps={gridProps} />
        <PresetList setCells={setCells} />
      </div>
        <About />
    </div>
  );
};

export default App;
