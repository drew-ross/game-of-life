import React from 'react';
import Cell from './Cell';

const CellRow = props => {

  const { row, rowIndex, grid } = props;

  return (
    <div className='CellRow'>
      {row.map((cell, i) => <Cell key={`cell:${rowIndex},${i}`} rowIndex={rowIndex} columnIndex={i} cell={cell} grid={grid} />)}
    </div>
  );
};

export default CellRow;