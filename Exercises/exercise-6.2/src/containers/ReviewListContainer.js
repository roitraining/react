import {connect} from 'react-redux';
import ReviewList from '../components/reviews/ReviewList';

const mapStateToProps = (state) => ({
    reviews : state.reviews
});

const ReviewListContainer = connect(mapStateToProps)(ReviewList);

export default ReviewListContainer;