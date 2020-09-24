import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  background: ${props => props.cell ? '#55f8e2' : null};
`;

const Cell = props => {

  const { cell, rowIndex, columnIndex } = props;
  const { cellSize, setCurrentXY, cellClick } = props.gridProps;

  return (
    <StyledCell
      className='Cell'
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