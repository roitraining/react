import PropTypes from 'prop-types';

function Book(props) {

    const { title = "unknown", author  = "unknown" } = props;
    return (
        <tr>
            <td>
                {title}
            </td>
            <td>{author}</td>
        </tr>
    )
}

Book.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string
};

export default Book;