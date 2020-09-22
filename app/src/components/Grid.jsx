import React from 'react';
import CellRow from './CellRow';

const Grid = props => {

  const { containerSize, gridSize, cells } = props.gridProps;

  return (
    <div 
    className='Grid' 
    style={{ 'width': `${containerSize}px`, 'height': `${containerSize}px` }}
    >
      {cells && cells.map((row, i) => <CellRow key={`row:${i}`} row={row} rowIndex={i} gridProps={props.gridProps} />)}
    </div>
  );
};

export default Grid;