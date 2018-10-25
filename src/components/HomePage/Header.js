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

const Hr = styled.hr`
  position: absolute;
  bottom: 0;
  margin: 0;
  left: 0;
  width: 0px;
  border: 0;
  border-bottom: 3px solid #4286f4;
`;

const HrW = styled(Hr)`
  width: 100%;
  border-bottom: 3px solid #fff;
`;

const Button = styled.button`
  &:hover ${Hr} {
    width: 100%;
    transition: 0.6s;
  }
  &:hover ${AddNews}{
    animation: ${textRotate} 0.3s;
  }
  position: relative;
  overflow: hidden;
  margin-top: 146px;
  margin-left: auto;
  margin-right: auto;
  border: 0;
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
      <section className="container">
        <Wrapper>
          <H1>Мировые новости</H1>
          <H3>date</H3>
        </Wrapper>
        <Button>
          <AddNews>Добавить новость</AddNews>
          <p>+</p>
          <HrW />
          <Hr />
        </Button>
      </section>
    </StyledHeader>
  );
}

export default Header;
