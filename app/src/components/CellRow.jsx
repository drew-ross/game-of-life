import React from 'react';
import Cell from './Cell';

const CellRow = props => {

  const { size, row } = props;

  return (
    <div className='CellRow'>
      {row.map(cell => <Cell cell={cell} size={size}/>)}
    </div>
  );
};

export default CellRow;