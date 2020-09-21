import React from 'react';
import Header from './Header';
import Grid from './Grid';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Grid gridSize={500}/>
    </div>
  );
};

export default App;
