import { useState } from 'react';

export const useCells = gridSize => {

  const [cells, setCells] = useState(createGrid(gridSize));

  const toggleCell = (row, column) => {
    setCells(cells.map((r, i) => {
      if (i === row) {
        return r.map((c, j) => {
          if (j === column) {
            return !c;
          } else {
            return c;
          }
        });
      }
      else {
        return r;
      }
    }));
  };

  return [cells, toggleCell];
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