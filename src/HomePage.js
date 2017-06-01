import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemsList from './ItemsList';
import { Head } from 'hops-react';
import { connect } from 'react-redux';
import { fetchFrontpageNews } from './actions';

class HomePage extends Component {
  componentDidMount() {
    // this.props.fetchFrontpageNews();
  }
  render() {
    const { items } = this.props;
    return (
      <div>
        <Head title="hops hn" />
        <h1>HN</h1>
        {items.length > 0 && <ItemsList items={items} />}
      </div>
    );
  }
}
HomePage.propTypes = {
  items: PropTypes.array.isRequired,
  fetchFrontpageNews: PropTypes.func.isRequired
};

export default connect(state => ({ items: state.hn.frontpageItems }), {
  fetchFrontpageNews
})(HomePage);
