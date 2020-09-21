import React, { useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import { useCells } from '../hooks/useCells';

const gridSize = 25;

const App = () => {

  const [mouseDown, setMouseDown] = useState(false);
  const [cells, toggleCell] = useCells(gridSize);

  window.addEventListener('mousedown', e => {
    setMouseDown(true);
  })
  
  window.addEventListener('mouseup', e => {
    setMouseDown(false);
  })

  return (
    <div className="App">
      <Header />
      <Grid containerSize={600} cells={cells} gridSize={gridSize} tc={toggleCell} mD={mouseDown}/>
    </div>
  );
};

export default App;
