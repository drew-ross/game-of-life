import React from 'react';

const Preset = props => {

  const { image } = props;

  return (
    <div className='Preset'>
      <img src={image} />
    </div>
  );
};

export default Preset;