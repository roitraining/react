import PropTypes from 'prop-types';
import {  Link } from "react-router-dom";

function Book({ title = "unknown", author = "unknown", cover = '/NoImage.png', bookId }) {


    return (
        <tr>
            <td>
            <Link  to={`/reviews/${bookId}/${title}`}>{title}</Link>
            </td>
            <td>{author}</td>
            <td><img src={cover} alt={title} /></td>
        </tr>
    );
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string,
    bookId: PropTypes.number.isRequired
};

export default Book;