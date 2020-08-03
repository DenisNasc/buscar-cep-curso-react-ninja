import React from 'react';
import styled from 'styled-components';

import {Paper} from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <StyledPaper>
      <StyledHeader>
        <h1>Curso React Ninja - Projeto Buscar CEP</h1>
      </StyledHeader>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  background-color: #ba1a57;
  color: white;
  && {
    border-radius: 0px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
