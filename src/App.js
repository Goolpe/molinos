import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsPages from './components/NewsPages';
import NewsPage from './components/NewsPages/NewsPage';
import styled from 'styled-components';

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 43px 0;
`

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <nav className='container'>
            <Nav>
              <NavLink to='/' exact={true} activeClassName='navigation__link--active' className='navigation__link'>Все</NavLink>
              <NavLink to='/news/politics'  activeClassName='navigation__link--active' className='navigation__link'>Политика</NavLink>
              <NavLink to='/news/sports'  activeClassName='navigation__link--active' className='navigation__link'>Спорт</NavLink>
              <NavLink to='/news/health' activeClassName='navigation__link--active' className='navigation__link'>Происшествия</NavLink>
              <NavLink to='/news/science' activeClassName='navigation__link--active' className='navigation__link'>Наука</NavLink>
              <NavLink to='/news/business' activeClassName='navigation__link--active' className='navigation__link'>Бизнес</NavLink>
            </Nav>
          </nav>
          <Switch>
            <Route path="/" exact={true} component={NewsPages} />
            <Route path="/news/:id" component={NewsPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;