import React from "react";

const About = () => {
  return (
    <section className='About content container'>
      <h2>How to Play</h2>
      <ol>
        <li>Click on a cell or click and drag to add/remove live cells</li>
        <li>
          When you've set up your board, click "Start" and watch how the board
          changes according to the rules outlined below
        </li>
      </ol>
      <ul>
        <li>You can use a preset by clicking any of the preset images</li>
        <li>
          When you hit "Start", the game will save your starting configuration
        </li>
        <li>
          When you hit "Pause", the game will temporarily stop creating new
          generations
        </li>
        <li>
          When you hit "Stop", the game will reset to the initial configuration
          and your generation count will return to 0
        </li>
      </ul>
      <p>Note that this site does not use cookies. Therefore, any configurations you've made will be lost upon closing the site.</p>
      <h2>Rules</h2>
      <ul>
        <li>Any live cell with fewer than two neighbors dies</li>
        <li>Any live cell with more than three neighbors dies</li>
        <li>Any live cell with two or three live neighbors lives</li>
        <li>
          Any dead cell with exactly three live neighbors will come to life
        </li>
      </ul>
      <h2>About the game</h2>
      <p>
        This is a zero-player "game" invented by late mathematician John H.
        Conway. The game is a cellular automaton, i.e. a grid of cells that
        change states via a set of rules. Each iteration of the game will cause
        cells to either live or die, depending on the rules above. The rules are
        simple, but the eventual outcome is not mathematically predictable. For
        more information, visit the{" "}
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'
        >
          Wikipedia
        </a>{" "}
        page.
      </p>
      <p>
        Site created by{" "}
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/drew-ross'
        >
          Drew Ross
        </a>
        .
      </p>
    </section>
  );
};

export default About;
