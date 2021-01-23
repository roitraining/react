import Review from './Review';
import { useEffect } from 'react';
import ReviewFormContainer from '../../containers/ReviewFormContainer';
function ReviewList({ receiveReviews, reviews, match: { params: { title, bookId } } }) {

    useEffect(() => {
        receiveReviews(bookId);
    },
    [receiveReviews,bookId]);


    return (
        <div className="row">
            <h2>Reviews:</h2>
            <div className="table-responsive">
                <ReviewFormContainer bookId={bookId} />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Reviews of {title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(function (item, i) {
                            return <Review review={item.content} key={i} />;
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default ReviewList;
