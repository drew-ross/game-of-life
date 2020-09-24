import { useState } from 'react';

const containerSize = 600;
const defaultGridSize = 15;

export const useCells = () => {

  const [cellsState, setCellsState] = useState({
    cells: createGrid(defaultGridSize),
    gridSize: defaultGridSize,
    cellSize: calculateCellSize(defaultGridSize)
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
          gridSize: defaultGridSize,
          cellSize: calculateCellSize(defaultGridSize)
        });
      }
    } else if (input === 'clear') {
      setCellsState({
        ...cellsState,
        cells: createGrid(cellsState.gridSize)
      });
    } else if (input === 'gridsize') {
      setCellsState({
        ...cellsState,
        cells: createGrid(gridSize),
        gridSize: gridSize,
        cellSize: calculateCellSize(gridSize)
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

const calculateCellSize = gridSize => {
  return containerSize / gridSize - 1
}