import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 768px;
  width: 100%;
  background-image: url('./assets/bitmap.jpg');
`;

function Header(props) {
  return (
    <StyledHeader>
      Header
    </StyledHeader>
  )
}

export default Header;
