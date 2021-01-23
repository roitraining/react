import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {

    render() {
        return (<tr>
            <td>
                {this.props.title}
            </td>
            <td>{this.props.author}</td>
        </tr>);
    }
}

Book.defaultProps = {
	title: 'unknown',
	author: 'unknown'
};


Book.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default Book;
