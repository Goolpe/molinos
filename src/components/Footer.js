import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #000;
  height: 247px;
  color: #fff;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
`;

const SeacrhFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 78px;
`;

const Input = styled.input`
  background: transparent;
  color: #fff;
  padding-bottom: 14px; 
  border: 0;
  border-bottom: 3px solid #fff;
`;

const Img = styled.img`
  width: 84px;
  height: 28px;
`;

const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 41px;
`;

const P = styled.p`
  margin: 0;
  font-size: 11px;
  opacity: 0.81;
  font-weight: 500;
`;

function Footer(props) {
  return (
    <StyledFooter>
      <Container className='container'>
        <SeacrhFlex>
          <Input placeholder='Поиск' />
          <Img src='./assets/appstore.png' />
        </SeacrhFlex>
        <NavFlex>
          <P>Редакция  Реклама  Пресс-релизы  Техподдержка  Спецпроекты  Вакансии  RSS</P>
          <P>© 1999–2018 ООО «Мировые новости»</P>
        </NavFlex>
      </Container>
    </StyledFooter>
  );
}

export default Footer;