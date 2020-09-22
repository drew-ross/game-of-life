import React from 'react';
import Preset from './Preset';
import { presets } from '../presets/presets';

const PresetList = () => {

  return (
    <div className='PresetList'>
      {presets.map(preset => <Preset key={preset.name} image={preset.image} name={preset.name} />)}
    </div>
  );
};

export default PresetList;