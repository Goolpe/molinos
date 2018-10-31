import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsGrid from './components/NewsGrid';
import NewsBlock from './components/NewsBlock';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      search: '',
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header/>
            <NewsBlock search={this.state.search}>
              <Switch>
                <Route path="/" exact={true} component={NewsGrid} />
                <Route path='/page/:page' component={NewsGrid} />
              </Switch>
            </NewsBlock>
            <Footer search={this.state.search} handleChange={this.handleChange}/>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;