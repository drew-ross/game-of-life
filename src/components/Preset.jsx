import React from 'react';

const Preset = props => {

  const { setCells } = props;
  const { image, data, name } = props.preset;

  return (
    <div
      className='Preset container container--preset'
      onClick={() => setCells(data)}
    >
      <p>{name}</p>
      <img alt={name} src={image} />
    </div>
  );
};

export default Preset;