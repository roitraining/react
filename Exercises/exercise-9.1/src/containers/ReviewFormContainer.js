import {connect} from 'react-redux';
import ReviewForm from '../components/forms/ReviewForm';
import { addReview } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    bookId : parseInt(ownProps.bookId)
});

const mapDispatchToProps = {
    addReview
};

const ReviewFormContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

export default ReviewFormContainer;
