import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

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

class PaginationBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      category: this.props.match.params.id,
      end: this.props.currentPage * 2,
      currentPage: this.props.currentPage,
      todosPerPage: this.props.todosPerPage,
    };
    this.fetchNews = this.fetchNews.bind(this);
    this.moreNews = this.moreNews.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this._mounted = true;
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchNews();
      this.setState({
        end: this.props.end,
        category: this.props.match.params.id
      });
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  moreNews() {
      if (this.state.end <= this.state.articles.length) {
        this.setState({
          end: +this.state.end + 2,
          todosPerPage: +this.props.todosPerPage + 2
        });
        if (this.state.end === this.state.articles.length - 2) {
          document.getElementById('moreNews').innerHTML = 'Больше нет новостей';
        }
      }
      else{
        return false;
      }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
      end: Number(event.target.id) * 2
    });
  }

  async fetchNews() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?' +
      'country=ru' + (this.state.category ? ('&category=' + this.state.category) : '') +
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
            <Type>{this.state.category}</Type>
            <Share><img src='../assets/share.svg'/></Share>
            <Figcaption>
              <Time>{article.publishedAt}</Time>
              <H2>{article.title}</H2>
            </Figcaption>
          </Wrapper>
        </Figure>
      </article>,
    )
    return (
      <section className="container">
        <PagBlock>
          <MoreNews onClick={this.moreNews} id='moreNews' >Больше новостей</MoreNews>
          <Pagination>
            <Link to={`/page/1`}>1</Link>
            <Link to={`/page/2`}>2</Link>
          </Pagination>
        </PagBlock>
      </section>
    );
  }
}

export default withRouter(PaginationBlock);