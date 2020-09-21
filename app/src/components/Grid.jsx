import React from 'react';

const Grid = props => {

  const { containerSize, cells } = props;

  return (
    <div className='Grid' style={{'width' : `${containerSize}px`, 'height' : `${containerSize}px`}}>
      
    </div>
  )
}

export default Grid;