import React from 'react';
import Cell from './Cell';

const Grid = props => {

  const { setMouseDown, cells, cellSize, setCurrentXY, cellClick } = props.gridProps;
  const cellProps = { cellSize, setCurrentXY, cellClick };
  return (
    <div
      className='Grid'
      onMouseLeave={() => setMouseDown(false)}
    >
      {cells && cells.map((row, rI) => (
        <div className='CellRow' id={`row:${rI}`} key={`row:${rI}`} style={{ height: `${cellSize}%` }}>
          {row.map((cell, cI) => {
            return <Cell key={`cell:${rI},${cI}`} rowIndex={rI} columnIndex={cI} cell={cell} cellProps={cellProps} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;