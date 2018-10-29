import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsGrid from './components/NewsGrid';
import NewsBlock from './components/NewsBlock';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
    };
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header/>
          <NewsBlock>
            <Switch>
              <Route path="/" exact={true} component={NewsGrid} />
              <Route path='/page/:page' component={NewsGrid} />
            </Switch>
          </NewsBlock>
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;