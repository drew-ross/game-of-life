import React, { useState, useEffect } from 'react';
import Header from './Header';
import Grid from './Grid';
import GameController from './GameController';
import PresetList from './PresetList';
import About from './About';
import { useCells } from '../hooks/useCells';

const containerSize = 600;

const App = () => {

  const [gridSize, setGridSize] = useState(25);
  const [mouseDown, setMouseDown] = useState(false);
  const [cells, changeCell, setCells, clear] = useCells(gridSize);
  const [initCells, , setInitCells] = useCells(gridSize);
  const [currentXY, setCurrentXY] = useState({ row: null, col: null });
  const [cellTo, setCellTo] = useState(false);
  const [cellSize, setCellSize] = useState(containerSize / gridSize - 1);

  useEffect(() => {
    setCellSize(containerSize / gridSize - 1);
    clear(gridSize);
  }, [gridSize]);

  useEffect(() => {
    if (mouseDown) {
      changeCell(currentXY.row, currentXY.col, cellTo);
    }
  }, [currentXY, mouseDown]);

  const cellClick = (alive, active) => {
    setCellTo(alive);
    setMouseDown(active);
  };

  const selectPreset = (data) => {
    setGridSize(25);
    setCells(data);
  };

  const gridProps = {
    containerSize,
    cells,
    gridSize,
    cellSize,
    setCurrentXY,
    cellClick,
  };

  const cellProps = {
    cells,
    setCells,
    initCells,
    setInitCells,
    clear,
    gridSize,
    setGridSize
  };

  return (
    <div className='App'>
      <Header />
      <div className='css-grid'>
        <GameController cellProps={cellProps} />
        <Grid gridProps={gridProps} />
        <PresetList selectPreset={selectPreset} />
      </div>
        <About />
    </div>
  );
};

export default App;
