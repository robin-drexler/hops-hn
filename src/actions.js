export const TYPES = {
  FRONTPAGE_NEWS_FETCHED: 'FRONTPAGE_NEWS_FETCHED',
  NEWS_ITEM_FETCHED: 'NEWS_ITEM_FETCHED'
};

const frontpageNewsFetched = items => ({
  type: TYPES.FRONTPAGE_NEWS_FETCHED,
  payload: items
});

const newsItemFetched = item => ({
  type: TYPES.NEWS_ITEM_FETCHED,
  payload: item
});

export const fetchFrontpageNews = () => dispatch => {
  return fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
    .then(result => result.json())
    .then(result => dispatch(frontpageNewsFetched(result.hits)));
};

export const fetchNewsItem = id => dispatch => {
  return fetch(`https://hn.algolia.com/api/v1/items/${id}`)
    .then(result => result.json())
    .then(result => dispatch(newsItemFetched(result)));
};
