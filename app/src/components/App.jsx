import React, { useState, useEffect } from 'react';
import Header from './Header';
import Grid from './Grid';
import GameController from './GameController';
import { useCells } from '../hooks/useCells';

const gridSize = 20;
const containerSize = 600;

const App = () => {

  const [mouseDown, setMouseDown] = useState(false);
  const [cells, changeCell, setCells, clear] = useCells(gridSize);
  const [initCells,, setInitCells] = useCells(gridSize);
  const [currentXY, setCurrentXY] = useState({ x: null, y: null });
  const [cellTo, setCellTo] = useState(false);

  useEffect(() => {
    if (mouseDown) {
      changeCell(currentXY.x, currentXY.y, cellTo);
    }
    console.log('check');
  }, [currentXY, mouseDown]);

  const cellClick = (alive, active) => {
    setCellTo(alive);
    setMouseDown(active);
  };

  const gridProps = {
    containerSize,
    cells,
    gridSize,
    cellSize: (containerSize / gridSize) - 1,
    setCurrentXY,
    cellClick,
  };

  const cellProps = {
    cells,
    setCells,
    initCells,
    setInitCells,
    clear
  }

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Grid gridProps={gridProps} />
        <GameController cellProps={cellProps} />
      </div>
    </div>
  );
};

export default App;
