import { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

function ReviewList() {

    const [reviews, setReviews] = useState(
        [{
            content: "A towering masterpiece."
        },
        {
            content: "I hated it."
        }]
    );

    function addReview(review) {
        setReviews([...reviews, review]);
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
