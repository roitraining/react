import Review from './Review';
import ReviewFormContainer from '../../containers/ReviewFormContainer';
import { useEffect } from 'react';

function ReviewList({ receiveReviews, reviews, match: { params: { title, bookId } } }) {

    useEffect(() => {
        receiveReviews(bookId);
      },
      [receiveReviews,bookId]);

    // const addReview = (review) => {
    //     setReviews(oldReviews => [...oldReviews, review]);
    // }


    return (
        <div className="row">
            <h2>Reviews:</h2>
            <div className="table-responsive">
                <ReviewFormContainer />
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
