import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import news from './news.json';
import moment from 'moment';

class NewsGrid extends Component {
  render() {
    const { currentPage, todosPerPage } = this.props;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    const articles = this.props.articles.filter(article =>
      this.props.tag === article.tag || this.props.tag === 'all');

    const currentTodos = articles.slice(4).slice(indexOfFirstTodo, indexOfLastTodo);

    const newsMainItem = articles.slice(0,1).map( (article, index) =>
      <article key={index}>
        <figure className='article__figure article__figure--first'>
          <img className='article__img' alt={article.title} src={article.file}/>
          <button name={article.category} id={article.tag} className={`article__category ${
            article.tag === 'sports' ? 'article__category--sports' :
            article.tag === 'politics' ? 'article__category--politics' :
            article.tag === 'science' ? 'article__category--science' :
            article.tag === 'business' ? 'article__category--business' :
            article.tag === 'accidents' ? 'article__category--accidents' : ''
          }`} onClick={this.props.handleClick} >{article.category}</button>
          <button className='article__share'><img src='/assets/share.svg'/></button>
          <figcaption className='article__caption'>
            <time>
              <h4>{moment(article.date).locale('ru').format('HH:mm, DD MMMM YYYY')}</h4>
            </time>
            <h3 className='caption__title'>{article.title}</h3>
          </figcaption>
        </figure>
      </article>,
    );

    const newsList = articles.slice(1,4).map( (article, index) =>
      <article className='news__list' key={index}>
        <h3 className='list__title'>{article.title}</h3>
        <div className='list__description'>
          <p className='list__views'>
            <img src='/assets/eye.svg' className='description__icon--view'/>
            320
          </p>
          <time>{moment(article.date).locale('ru').format('HH:mm, DD MMMM YYYY')}</time>
        </div>
      </article>,
    );

    const newsItems = currentTodos.map( (article, index) =>
      <article key={index}>
        <figure className='article__figure'>
          <img className='article__img' alt={article.title} src={article.file}/>
            <button name={article.category} id={article.tag} className={`article__category ${
              article.tag === 'sports' ? 'article__category--sports' :
              article.tag === 'politics' ? 'article__category--politics' :
              article.tag === 'science' ? 'article__category--science' :
              article.tag === 'business' ? 'article__category--business' :
              article.tag === 'accidents' ? 'article__category--accidents' : ''
            }`} onClick={this.props.handleClick} >{article.category}</button>
            <button className='article__share'><img src='/assets/share.svg'/></button>
            <figcaption className='article__caption'>
              <time>
                <h4>{moment(article.date).locale('ru').format('HH:mm, DD MMMM YYYY')}</h4>
              </time>
              <h3 className='caption__title'>{article.title}</h3>
            </figcaption>
        </figure>
      </article>,
    );

    return (
      <section className='container__grid'>
        <section className='container__grid--first'>
          <section className='container--block'>
            <h2>{moment().locale('ru').format('DD MMMM YYYY, dddd, HH:mm')}</h2>
            <div className='container__grid--first--block'>
              {newsMainItem}
            </div>
          </section>
          <section className='container--block'>
            <h2 className='container--block__category-title'>{this.props.category}</h2>
            <section className='container--block__list'>
              {newsList}
            </section>
          </section>
        </section>
        <section className='container__grid--second'>
          {newsItems}
        </section>
      </section>
    );
  }
}

export default withRouter(NewsGrid);