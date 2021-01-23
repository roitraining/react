import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {

    shouldComponentUpdate(nextProps) {
        return (this.props.title !== nextProps.title);
    }

    render() {
        return (<tr>
            <td>
                {this.props.title}
            </td>
            <td>{this.props.author}</td>
			<td><img src={this.props.cover} alt={this.props.title} /></td>
        </tr>);
    }
}

Book.defaultProps = {
	title: 'unknown',
	author: 'unknown',
    cover: '/NoImage.png'

};


Book.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired
};

export default Book;
