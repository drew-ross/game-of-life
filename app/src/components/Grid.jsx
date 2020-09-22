import React from 'react';
import CellRow from './CellRow';

const Grid = props => {

  const { containerSize, gridSize, cells } = props.grid;

  return (
    <div 
    className='Grid' 
    style={{ 'width': `${containerSize}px`, 'height': `${containerSize}px` }}
    >
      {cells && cells.map((row, i) => <CellRow key={`row:${i}`} row={row} rowIndex={i} grid={props.grid} />)}
    </div>
  );
};

export default Grid;