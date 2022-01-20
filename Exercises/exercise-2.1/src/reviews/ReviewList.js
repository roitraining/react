import Review from './Review';

function ReviewList() {

  return (
    <div className="row">
      <h2>Reviews:</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            <Review />
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default ReviewList;
