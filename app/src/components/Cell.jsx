import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  background: ${props => props.cell ? 'black' : 'white'};
`;

const Cell = props => {

  const { size, cell, rowIndex, columnIndex, toggleCell, mD } = props;

  const onClick = e => {
    if (mD) {
      toggleCell(rowIndex, columnIndex);
    }
  };

  return (
    <StyledCell
      className='Cell'
      size={size}
      cell={cell}
      onMouseOver={onClick}
    >

    </StyledCell>
  );
};

export default Cell;