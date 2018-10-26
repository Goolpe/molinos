import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.section`
  display: grid;
  grid-template-columns: 444px 444px;
  grid-gap: 36px;
`;

const H2 = styled.h2`
  font-size: 16px;
  margin: 10px 0;
`;

const Figure = styled.figure`
  margin: 0;
  height: 279px;
  overflow: hidden;
  position: relative;
  background-color: #000;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5)
`;

const Figcaption = styled.figcaption`
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
`;

const Type = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  border:0;
  color: #fff;
`;

const Share = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border:0;
  color: #fff;
`;

const Time = styled.time`
  font-size: 11px;
  font-weight: 300;
`;

const PagBlock = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 43px 0;
`;

const Pagination = styled.ul`
  display: flex;
`;

const Page = styled.button`
  background-color: transparent;
  border: 0;
`;

const MoreNews = styled(Page)`
  font-size: 16px;
`;

class NewsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      start: this.props.start,
      end: this.props.end
    }
    this.fetchNews = this.fetchNews.bind(this);
    this.moreNews = this.moreNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchNews();
      this.setState({
        end: 4,
      });
    }
  }

  moreNews(){
      if (this.state.end <= this.state.articles.length) {
        this.setState({
          end: +this.state.end + 2,
        });
        if (this.state.end === this.state.articles.length - 2) {
          document.getElementById('moreNews').innerHTML = 'Больше нет новостей';
        }
      }
      else{
        return false;
      }
  }

  async fetchNews() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?' +
      'country=ru' + (this.props.match.params.id ? ('&category=' + this.props.match.params.id) : '') +
      '&apiKey=1009e543ed4b41818f9d018e97f65c63');
    const data = await res.json();
    this.setState({
      articles: data.articles,
    });
  }
  render() {
    const newsItems = this.state.articles.map( (article, index) =>
      <article key={index}>
        <Figure>
          <Img src={article.urlToImage}/>
          <Wrapper>
            <Type>Спорт</Type>
            <Share><img src='../assets/share.svg'/></Share>
            <Figcaption>
              <Time>{article.publishedAt}</Time>
              <H2>{article.title}</H2>
            </Figcaption>
          </Wrapper>
        </Figure>
      </article>,
    ).slice(this.state.start, this.state.end)
    return (
      <section className="container">
        <Container>
        {newsItems}
        </Container>
        <PagBlock>
          <MoreNews onClick={this.moreNews} id='moreNews' >Больше новостей</MoreNews>
          <Pagination>
            <li><Page>1</Page></li>
            <li><Page>2</Page></li>
            <li><Page>3</Page></li>
            <li><Page>4</Page></li>
          </Pagination>
        </PagBlock>
      </section>
    )
  }
}

export default withRouter(NewsBlock);