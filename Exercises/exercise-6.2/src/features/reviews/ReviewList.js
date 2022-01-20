import Review from './Review';
import ReviewForm from './ReviewForm';
import * as api from '../api';
import { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";

function ReviewList() {

  const [reviews, setReviews] = useState([]);
  const { bookId, title } = useParams()

  function addReview(review) {
    api.addReview(review).then(getReviews());
    getReviews();
  }

  function getReviews() {
    api.fetchReviews(bookId).then((response) => {
      setReviews(response);
    });
  }

  useEffect(() => {
    api.fetchReviews(bookId).then((response) => {
      setReviews(response);
    });
  },
    [bookId]);


  return (
    <div className="row">
      <h2>Reviews of {title}:</h2>
      <div className="table-responsive">
        <ReviewForm addReview={addReview} bookId={+bookId} />
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
