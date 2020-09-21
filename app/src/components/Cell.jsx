import React from 'react';

const Cell = props => {

  const { size, cell, rowIndex, columnIndex } = props;

  return (
    <div className='Cell' style={{'width' : `${size}px`, 'height' : `${size}px`}}>
      <p>{`${rowIndex}:${columnIndex}`}</p>
    </div>
  );
};

export default Cell;