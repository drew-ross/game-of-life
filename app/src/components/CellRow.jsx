import React from 'react';
import Cell from './Cell';

const CellRow = props => {

  const { size, row, rowIndex, tc, mD } = props;

  return (
    <div className='CellRow'>
      {row.map((cell, i) => <Cell key={`cell:${rowIndex},${i}`} rowIndex={rowIndex} columnIndex={i} cell={cell} size={size} toggleCell={tc} mD={mD}/>)}
    </div>
  );
};

export default CellRow;