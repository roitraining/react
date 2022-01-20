import PropTypes from 'prop-types';

function Review({ review }) {
   return (
    <tr>
        <td >{review}</td>
    </tr>
    );
}

Review.propTypes = { review: PropTypes.string.isRequired };

export default Review;