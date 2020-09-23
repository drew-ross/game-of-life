import React from 'react';

const About = () => {

  return (
    <section className='About content container'>
      <h2>Rules</h2>
      <ul>
        <li>Any live cell with fewer than two neighbors dies</li>
        <li>Any live cell with more than three neighbours dies</li>
        <li>Any live cell with two or three live neighbours lives</li>
        <li>Any dead cell with exactly three live neighbours will come to life</li>
      </ul>
      <h2>About the game</h2>
      <p>This is a zero-player "game" invented by late mathematician John H. Conway. 
        The game is a cellular automaton, i.e. a grid of cells that change states via a set of rules. 
        Each iteration of the game will cause cells to either live or die, depending on the rules above.
        The rules are simple, but the eventual outcome is not mathematically predictable.
        For more information, visit the <a target='_blank' href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>Wikipedia</a> page.</p>
    </section>
  );
};

export default About;