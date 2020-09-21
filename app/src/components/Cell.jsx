import React from 'react';

const Cell = props => {

  const { size, cell } = props;

  return (
    <div className='Cell' style={{'width' : `${size}px`, 'height' : `${size}px`}}>

    </div>
  );
};

export default Cell;