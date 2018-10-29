import { FETCH_ARTICLES } from '../actions/types';

const initialState = {
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
