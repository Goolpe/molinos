import React, { Component } from 'react';
import styled from 'styled-components';
import NewsBlock from './NewsBlock';

const Container = styled.section`
  display: grid;
  grid-template-columns: 539px 347px;
  grid-gap: 37px;
`;

const Block = styled.section`
  border-top: 3px solid #000;
  height: 362px;
`;

const Articles = styled.section`
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin-top: 18px;
  margin-bottom: 25px;
`;

const H2 = styled.h2`
  font-size: 16px;
  margin: 10px 0;
`;

const Figure = styled.figure`
  margin: 0;
  position: relative;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
`;

const Time = styled.time`
  font-size: 11px;
  font-weight: 300;
`;

const Article = styled.article`
  color: #434343;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  color: #d8d8d8;
  font-size: 11px;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 10px;
`;

const Views = styled.p`
  margin: 0;
  margin-right: 27px;
`;

class NewsPage extends Component {
  render() {
    return (
      <Container className="container">
        <Block>
          <H1>12 сентября 2018 года, Среда, 17:07</H1>
          <article>
            <Figure>
              <img src='./assets/dzyuba.jpg'/>
              <Figcaption>
                <Time>01:50, 11 сентября 2018</Time>
                <H2>Дзюба стал «человеком года» по версии GQ</H2>
              </Figcaption>
            </Figure>
          </article>
        </Block>
        <Block>
          <H1>Главные новости</H1>
          <Articles>
            <Article>
              <H2>Найдены виновные в обвале рубля</H2>
              <Description>
                <Views>
                  320
                </Views>
                <time>14:23, 12 сентября 2018</time>
              </Description>
            </Article>
            <Article>
              <H2>НАСА отреагировало на обвинения в продырявливании «Союза»</H2>
              <Description>
                <Views>
                  320
                </Views>
                <time>14:23, 12 сентября 2018</time>
              </Description>
            </Article>
            <Article>
              <H2>Меркель допустила атаку Германии на Сирию</H2>
              <Description>
                <Views>
                  320
                </Views>
                <time>14:23, 12 сентября 2018</time>
              </Description>
            </Article>
          </Articles>
        </Block>
        <NewsBlock start='0' end='2'/>
      </Container>
    )
  }
}

export default NewsPage;