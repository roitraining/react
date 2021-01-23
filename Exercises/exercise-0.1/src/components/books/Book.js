import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Book extends React.Component {

    shouldComponentUpdate(nextProps) {
        return (this.props.bookId !== nextProps.bookId);
    }

    render() {
        const { title, bookId, author, cover } = this.props;
        return (<tr>
            <td><Link to={`/reviews/${bookId}/${title}`}>{title}</Link> </td>
            <td>{author}</td>
            <td><img src={cover} alt={title} /></td>
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
    cover: PropTypes.string.isRequired,
    bookId: PropTypes.number.isRequired
};

export default Book;
