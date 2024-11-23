import PropTypes from 'prop-types';

function Book({ title = "unknown", author = "unknown", cover = '/NoImage.png' }) {

    return (
        <tr>
            <td>
                {title}
            </td>
            <td>{author}</td>
            <td><img src={cover} alt={title} /></td>
        </tr>
    );
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string
};

export default Book;