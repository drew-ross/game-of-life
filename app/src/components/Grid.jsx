import React from 'react';
import CellRow from './CellRow';

const Grid = props => {

  const { containerSize, gridSize, cells, tc, mD } = props;

  return (
    <div className='Grid' style={{ 'width': `${containerSize}px`, 'height': `${containerSize}px` }}>
      {cells && cells.map((row, i) => <CellRow key={`row:${i}`} row={row} rowIndex={i} size={containerSize / gridSize - 1} tc={tc} mD={mD} />)}
    </div>
  );
};

export default Grid;