import React from 'react';
import Cell from './Cell';

const CellRow = props => {

  const { row, rowIndex, gridProps } = props;

  return (
    <div className='CellRow'>
      {row.map((cell, i) => <Cell key={`cell:${rowIndex},${i}`} rowIndex={rowIndex} columnIndex={i} cell={cell} gridProps={gridProps} />)}
    </div>
  );
};

export default CellRow;