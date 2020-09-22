import { useState } from 'react';

export const useCells = gridSize => {

  const [cells, setCells] = useState(createGrid(gridSize));
  
  const changeCell = (row, column, alive) => {
    let newCells = cells;
    newCells[row][column] = alive;
    setCells(newCells);
  };

  const clear = (size = gridSize) => {
    setCells(createGrid(size));
  }

  return [cells, changeCell, setCells, clear];
};

const createGrid = gridSize => {
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    const gridRow = [];
    for (let j = 0; j < gridSize; j++) {
      gridRow.push(false);
    }
    grid.push(gridRow);
  }
  return grid;
};