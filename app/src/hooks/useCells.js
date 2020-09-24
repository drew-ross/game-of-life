import { useState } from 'react';

const containerSize = 600;

export const useCells = () => {

  const [cellsState, setCellsState] = useState({ 
    cells: createGrid(25), 
    gridSize: 25,
    cellSize: containerSize / 25 - 1
  });
  const { cells, gridSize, cellSize } = cellsState;

  const changeCell = (row, column, alive) => {
    let newCells = cells;
    newCells[row][column] = alive;
    setCells(newCells);
  };

  const setCells = (input, gridSize = null) => {
    if (typeof input === 'object' && input.constructor === Array) {
      if (input.length === cells.length) {
        setCellsState({
          ...cellsState,
          cells: input
        });
      } else {
        setCellsState({
          ...cellsState,
          cells: input,
          gridSize: 25,
          cellSize: containerSize / 25 - 1
        });
      }
    } else if (input === 'clear') {
      setCells(createGrid(gridSize));
    } else if (input === 'gridsize') {
      console.log(input)
      setCellsState({
        ...cellsState,
        cells: createGrid(gridSize),
        gridSize: input,
        cellSize: containerSize / gridSize - 1
      });
    }
  };

  return [cells, setCells, changeCell, gridSize, cellSize];
};

const createGrid = input => {
  const grid = [];
  for (let i = 0; i < input; i++) {
    const gridRow = [];
    for (let j = 0; j < input; j++) {
      gridRow.push(false);
    }
    grid.push(gridRow);
  }
  return grid;
};