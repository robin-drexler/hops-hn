import React, { Component } from 'react';
import { Head } from 'hops-react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchNewsItem } from './actions';

const Item = ({ item }) => (
  <div>
    <h1>{item.title}</h1>
    <p>
      {item.text}
    </p>
  </div>
);

class DetailPage extends Component {
  componentDidMount() {
    this.props.fetchNewsItem(this.props.match.params.id);
  }
  render() {
    const { item } = this.props;

    return (
      <div>
        {item && <Item item={item} />}
      </div>
    );
  }
}

DetailPage.PropTypes = {
  item: PropTypes.object.isRequired,
  fetchNewsItem: PropTypes.func.is,
  match: PropTypes.object.isRequired
};

export default connect(state => ({ item: state.hn.currentItem }), {
  fetchNewsItem
})(DetailPage);
