import React from 'react';

const Preset = props => {

  const { selectPreset } = props;
  const { image, data, name } = props.preset;

  return (
    <div
      className='Preset'
      onClick={() => selectPreset(data)}
    >
      <p>{name}</p>
      <img src={image} />
    </div>
  );
};

export default Preset;