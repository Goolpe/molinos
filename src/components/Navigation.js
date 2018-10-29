import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../styles/navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className='container'>
        <ul className='navigation'>
          <li>
            <button name='Главные новости' id='all'
              className={`navigation__link ${this.props.tag === 'all' ? 'navigation__link--active' : ''}`}
              onClick={this.props.handleClick}
            >
              Все
            </button>
          </li>
          <li>
            <button name='Политика' id='politics'
              className={`navigation__link ${this.props.tag === 'politics' ? 'navigation__link--politics' : ''}`}
              onClick={this.props.handleClick}
            >
              Политика
            </button>
          </li>
          <li>
            <button name='Спорт' id='sports'
              className={`navigation__link ${this.props.tag === 'sports' ? 'navigation__link--sports' : ''}`}
              onClick={this.props.handleClick}
            >
              Спорт
            </button>
          </li>
          <li>
            <button name='Происшествия' id='accidents'
              className={`navigation__link ${this.props.tag === 'accidents' ? 'navigation__link--accidents' : ''}`}
              onClick={this.props.handleClick}
            >
              Происшествия
            </button>
          </li>
          <li>
            <button name='Наука' id='science'
              className={`navigation__link ${this.props.tag === 'science' ? 'navigation__link--science' : ''}`}
              onClick={this.props.handleClick}
            >
              Наука
            </button>
          </li>
          <li>
            <button name='Бизнес' id='business'
              className={`navigation__link ${this.props.tag === 'business' ? 'navigation__link--business' : ''}`}
              onClick={this.props.handleClick}
            >
              Бизнес
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;