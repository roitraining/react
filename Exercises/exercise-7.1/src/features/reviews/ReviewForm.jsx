import  { useState } from 'react';
import PropTypes from 'prop-types';
import { addReviewAsync } from './reviewSlice';
import { store } from '../../app/store';

function ReviewForm({ bookId}) {

    const [content, setContent] = useState("");

    function createReview(e) {
        e.preventDefault();
        store.dispatch(addReviewAsync({content, bookId}));
        setContent("");
    }

    return (
        <form className="form-group form-inline" onSubmit={createReview}>
        <label className="control-label">Review:
        <input type="text" className="form-control" 
        value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit" className="btn btn-primary">Add Review</button>
    </form>
    )
}

ReviewForm.propTypes = {
    bookId: PropTypes.number.isRequired
};

export default ReviewForm;