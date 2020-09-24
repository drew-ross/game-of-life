import React from 'react';
import Preset from './Preset';
import { presets } from '../presets/presets';

const PresetList = props => {

  const { setCells } = props;

  return (
    <div className='PresetList'>
      {presets.map(preset => <Preset key={preset.name} preset={preset} setCells={setCells} />)}
    </div>
  );
};

export default PresetList;