import { connect } from 'react-redux';
import reviewForm from '../components/forms/ReviewForm';
import { addReview } from '../actions';

const data = {
    content: ''
}

function getData(id) {
    data.bookId = id;
    return data;
}

const mapDispatchToProps = ({
    onSubmit: addReview
});

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: getData(ownProps.id)
    }
};


const ReviewFormContainer = connect(mapStateToProps, mapDispatchToProps)(reviewForm);


export default ReviewFormContainer;