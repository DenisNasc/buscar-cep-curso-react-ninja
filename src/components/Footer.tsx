import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return <StyledFooter>Denis Nascimento</StyledFooter>;
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
