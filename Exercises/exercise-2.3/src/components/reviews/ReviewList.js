import Review from './Review';

function ReviewList() {

    const reviews = [{
        content: "A towering masterpiece."
    },{
        content: "I hated it."
    }];

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
