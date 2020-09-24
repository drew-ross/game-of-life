import React from 'react';
import Cell from './Cell';

const Grid = props => {

  const { containerSize, gridSize, cells, cellSize, setCurrentXY, cellClick } = props.gridProps;
  const cellProps = { cellSize, setCurrentXY, cellClick };
  return (
    <div
      className='Grid'
      style={{ 'width': `${containerSize}px`, 'height': `${containerSize}px` }}
    >
      {cells && cells.map((row, rI) => (
        <div className='CellRow'>
          {row.map((cell, cI) => <Cell key={`cell:${rI},${cI}`} rowIndex={rI} columnIndex={cI} cell={cell} cellProps={cellProps} />)}
        </div>
      ))}
    </div>
  );
};

export default Grid;