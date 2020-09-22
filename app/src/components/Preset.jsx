import React from 'react';

const Preset = props => {

  const { selectPreset } = props;
  const { image, data } = props.preset;

  return (
    <div
      className='Preset'
      onClick={() => selectPreset(data)}
    >
      <img src={image} />
    </div>
  );
};

export default Preset;