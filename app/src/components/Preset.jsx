import React from 'react';

const Preset = props => {

  const { setCells } = props;
  const { image, data, name } = props.preset;

  return (
    <div
      className='Preset container _preset'
      onClick={() => setCells(data)}
    >
      <p>{name}</p>
      <img src={image} />
    </div>
  );
};

export default Preset;