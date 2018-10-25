import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #000000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('./assets/bitmap.jpg');
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-transform: uppercase;
`;

const Wrapper = styled.section`
  height: 431px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const H1 = styled.h1`
  margin: 17px 0;
  font-size: 36px;
  font-weight: bold;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 11px;
  opacity: 0.81;
  font-weight: 500;
`;

const AddNews = styled(H3)`
  display: block;
`;

const textRotate = keyframes`
  from {
    margin-top: -150px;
  }

  to {
    margin-top: 0;
  }
`;

const Plus = styled.p``;

const Button = styled.button`
  &:hover{
    border-color: red;
    transition: 0.5s;
  }
  &:hover ${AddNews}{
    animation: ${textRotate} 0.3s;
  }
  overflow: hidden;
  margin-top: 146px;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  border-bottom: 3px solid #fff;
  width: 189px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


function Header(props) {
  return (
    <StyledHeader>
      <Wrapper>
        <H1>Мировые новости</H1>
        <H3>date</H3>
      </Wrapper>
      <Button>
        <AddNews>Добавить новость</AddNews>
        <Plus>+</Plus>
      </Button>
    </StyledHeader>
  );
}

export default Header;
