import { combineReducers } from 'redux';
import reducerNews from './reducerNews';

export default combineReducers({
  articles: reducerNews,
});

