import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
  width: ${props => `${props.size}%`};
  background: ${props => props.cell ? '#55f8e2' : null};
`;

const Cell = props => {

  const { cell, rowIndex, columnIndex } = props;
  const { cellSize, setCurrentXY, cellClick } = props.cellProps;

  return (
    <StyledCell
      className='Cell'
      id={`${rowIndex}:${columnIndex}`}
      size={cellSize}
      cell={cell}
      onMouseOver={() => setCurrentXY({ row: rowIndex, col: columnIndex })}
      onMouseDown={() => cellClick(!cell, true)}
      onMouseUp={() => cellClick(!cell, false)}
    >

    </StyledCell>
  );
};

export default Cell;