import React from 'react';
import CellRow from './CellRow';

const Grid = props => {

  const { containerSize, gridSize, cells } = props;

  return (
    <div className='Grid' style={{ 'width': `${containerSize}px`, 'height': `${containerSize}px` }}>
      {cells && cells.map((row, i) => <CellRow key={`row:${i}`} row={row} rowIndex={i} size={containerSize / gridSize - 1}/>)}
    </div>
  );
};

export default Grid;