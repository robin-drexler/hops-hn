import { TYPES } from './actions';

const initialState = {
  frontpageItems: [],
  currentItem: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPES.FRONTPAGE_NEWS_FETCHED:
      return { ...state, frontpageItems: action.payload, currentItem: {} };
    case TYPES.NEWS_ITEM_FETCHED:
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
};
