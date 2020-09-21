import { useState } from 'react';

export const useCells = gridSize => {
  
  const [cells, setCells] = useState(createGridObj(gridSize));
  
  const toggleCell = cell => {
    setCells({
      ...cells,
      [cell]: !cells[cell]
    });
  };

  return [cells, toggleCell];
};

const createGridObj = gridSize => {
  const gridObj = {};
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      gridObj[`${i}:${j}`] = false;
    }
  }
  return gridObj;
};