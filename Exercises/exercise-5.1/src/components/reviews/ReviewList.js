import Review from './Review';
import ReviewForm from '../forms/ReviewForm';
import * as api from '../../api';

import { useState, useEffect } from 'react';
function ReviewList() {

    const bookId = 1;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
         api.fetchReviews(bookId).then((response) => {
            setReviews(response);
        });
      },
      [bookId]);

    const addReview = (review) => {
        setReviews(oldReviews => [...oldReviews, review]);
    }


    return (
        <div className="row">
            <h2>Reviews:</h2>
            <div className="table-responsive">
            <ReviewForm addReview={addReview} />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Review</th>
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
