import PropTypes from 'prop-types';
import React from 'react';

function Book({title = "unknown", author  = "unknown" }) {

  return (
      <tr>
          <td>
              {title}
          </td>
          <td>{author}</td>
      </tr>
  );
}

Book.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string
};

export default React.memo(Book);
