import { FETCH_ARTICLES } from './types';

export const fetchArticles = () => async (dispatch) => {
  const response = await JSON.parse(localStorage.getItem('news'));
  dispatch({
    type: FETCH_ARTICLES,
    payload: response,
  });
};

export const createArticle = data => async (dispatch) => {
  const news = await JSON.parse(localStorage.getItem('news'));
  news.push(data);
  await localStorage.setItem('news', JSON.stringify(news));
  dispatch({
    type: FETCH_ARTICLES,
    payload: news,
  });
};