import React from 'react';
import Header from './Header';
import Grid from './Grid';
import { useCells } from '../hooks/useCells';

const gridSize = 25;

const App = () => {

  const [cells, toggleCell] = useCells(gridSize);

  return (
    <div className="App">
      <Header />
      <Grid containerSize={600} cells={cells} gridSize={gridSize} />
    </div>
  );
};

export default App;
