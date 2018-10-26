import React, { Component } from 'react';
import NewsBlock from './NewsBlock';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
`

class NewsPage extends Component {
  render() {
    return (
      <Container className="container">
        <NewsBlock start='0' end='4' />
      </Container>
    )
  }
}

export default NewsPage;