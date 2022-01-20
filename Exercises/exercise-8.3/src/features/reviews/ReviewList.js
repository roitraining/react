import Review from './Review';
import ReviewForm from './ReviewForm';
import { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectBookById } from '../books/bookSlice';
import { reviewsAsync, selectAllReviews } from './reviewSlice';
import { store } from '../../app/store';
import { Button } from 'react-bootstrap';

function ReviewList() {

  const { bookId, title } = useParams();
  const reviews = useSelector(state => selectAllReviews(state));
  const book = useSelector(state => selectBookById(state, +bookId));
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    store.dispatch(reviewsAsync(bookId));
  },
    [bookId]);


  return (
    <div className="row">
      <h2>Reviews of {title}:</h2>
      <div className="row">
        <div className="col-3">
          <img src={book.cover || '/NoImage.png'} alt={book.title} />
        </div>
        <div className="col">
          <p>

          </p>
          <p>
            Written By
          </p>
          <p>
            <strong>{book.author}</strong>
          </p>
        </div>
      </div>
      <div className="table-responsive">
      <Button onClick={handleShow} variant="primary" >
        Add Review
      </Button>
        <ReviewForm bookId={+bookId} show={showModal} onHide={handleClose}  />
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
