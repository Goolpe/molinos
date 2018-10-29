import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Pagination extends Component {
  render() {
    
    const count = this.props.articles.filter(article =>
      this.props.tag === article.tag || this.props.tag === 'all').length - 4;

    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(count / this.props.todosPerPage); i++){
      pageNumbers.push(i)
    };

    const pagination = pageNumbers.map( (number, index) =>
      <React.Fragment key={index}>
        {pageNumbers.length > 1 && 
        <Link to={`/page/${number}`}
          className='pagination__link' onClick={() => {this.props.handleLink(number)}}
        >
          <h3>{number}</h3>
        </Link>}
      </React.Fragment>,
    );
    return (
      <section className='newsblock__pagination newsblock__pagination--block'>
        {pageNumbers.length - this.props.currentPage > 0 ?
        <button className='newsblock__button' onClick={this.props.moreNews}>
          <h3>Больше новостей</h3>
        </button> : <h3>Больше нет новостей</h3>}
        <ul className='newsblock__pagination'>
          {pagination}
        </ul>
      </section>
    );
  }
}

export default withRouter(Pagination);
