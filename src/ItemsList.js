import React from 'react';
import { Link } from 'hops-react';
import PropTypes from 'prop-types';

const ItemsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        const url = !item.url ? `/item/${item.objectID}` : item.url;

        return (
          <li key={item.objectID}>
            {item.url
              ? <a href={item.url}>{item.title}</a>
              : <Link to={`/item/${item.objectID}`}>
                  {item.title}
                </Link>}

          </li>
        );
      })}

    </ul>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;
