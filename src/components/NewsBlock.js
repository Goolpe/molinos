import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../styles/newsblock.scss';
import Navigation from './Navigation';
import NewsGrid from './NewsGrid';
import Pagination from './Pagination';

class NewsBlock extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
      category: 'Главные новости',
      currentPage: 1,
      todosPerPage: 2,
      tag: 'all'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.moreNews = this.moreNews.bind(this);
  }

  componentDidMount() {
    if(localStorage.news){
      this.setState({
        articles: JSON.parse(localStorage.getItem('news')),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentPage !== prevState.currentPage) {
      this.setState({
        currentPage: this.state.currentPage
      });
      this.props.history.push('/page/' + this.state.currentPage);
    }
    else if(this.state.tag !== prevState.tag) {
      this.setState({
        todosPerPage: 2
      });
      this.props.history.push('/page/1');
    }
  }

  handleClick(e) {
    this.setState({
      category: e.target.name,
      tag: e.target.id,
      currentPage: 1,
    })
  }

  handleLink(number) {
    this.setState({
      currentPage: number,
    })
  }

  moreNews() {
    if (this.state.articles.filter(article =>
      this.state.tag === article.tag || this.state.tag === 'all').length /
      this.state.todosPerPage > this.state.currentPage) {

      this.setState({
        todosPerPage: +this.state.todosPerPage + 2
      });
    }
    else{
      return false;
    }
  }

  render() {
    return (
      <section className="container">
        <Navigation tag={this.state.tag} handleClick={this.handleClick}/>
        <NewsGrid
          articles={this.state.articles}
          category={this.state.category}
          tag={this.state.tag}
          currentPage={this.state.currentPage}
          todosPerPage={this.state.todosPerPage}
          handleClick={this.handleClick}
          pages={this.state.pages}
        />
        <Pagination
          articles={this.state.articles}
          category={this.state.category}
          tag={this.state.tag}
          handleClick={this.handleClick}
          handleLink={this.handleLink}
          moreNews={this.moreNews}
          todosPerPage={this.state.todosPerPage}
          currentPage={this.state.currentPage}
        />
      </section>
    );
  }
}

export default withRouter(NewsBlock);
