import React from 'react';
import f from 'isomorphic-fetch';

import { headline } from './styles.css';

import { Route, Switch, Miss } from 'hops-react';
import { render } from 'hops-redux';

import HomePage from './HomePage';
import DetailPage from './DetailPage';
import reducer from './reducer';

import { fetchFrontpageNews, fetchNewsItem } from './actions';
import pathToRegexp from 'path-to-regexp';

const Foo = () => <h1 className={headline}>Hello Foo!</h1>;

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/item/:id" component={DetailPage} />
    <Route path="/foo" component={Foo} />
    <Miss />
  </Switch>
);

export default render(<App />, {
  reducers: {
    hn: reducer
  },
  actionCreators: [
    location => {
      const result = pathToRegexp('/');
      if (location.pathname.match(result)) {
        return fetchFrontpageNews();
      }
      return () => {};
    },
    location => {
      const result = pathToRegexp('/item/:id');
      const match = location.pathname.match(result);
      if (match) {
        return fetchNewsItem(match[1]);
      }

      return () => {};
    }
  ]
});
