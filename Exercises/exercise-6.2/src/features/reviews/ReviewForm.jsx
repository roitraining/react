import  { useState } from 'react';
import PropTypes from 'prop-types';

function ReviewForm({addReview, bookId}) {

    const [content, setContent] = useState("");

    function createReview(e) {
        e.preventDefault();
        addReview({content, bookId});
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
    addReview: PropTypes.func.isRequired,
    bookId: PropTypes.number.isRequired
};

export default ReviewForm;