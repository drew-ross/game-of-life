import React, { useState, useEffect } from 'react';
import Header from './Header';
import Grid from './Grid';
import { useCells } from '../hooks/useCells';

const gridSize = 20;
const containerSize = 600;

const App = () => {

  const [mouseDown, setMouseDown] = useState(false);
  const [cells, changeCell] = useCells(gridSize);
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

  const [grid] = useState({
    containerSize,
    cells,
    gridSize,
    cellSize: (containerSize / gridSize) - 1,
    setCurrentXY,
    cellClick,
  });


  return (
    <div className="App">
      <Header />
      <Grid grid={grid} />
    </div>
  );
};

export default App;
