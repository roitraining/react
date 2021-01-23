import {connect} from 'react-redux';
import ReviewList from '../components/reviews/ReviewList';
import { receiveReviews } from '../actions';

const mapStateToProps = (state) => ({
    reviews : state.reviews
});

const mapDispatchToProps = {
    receiveReviews
};

const ReviewListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewList);

export default ReviewListContainer;
