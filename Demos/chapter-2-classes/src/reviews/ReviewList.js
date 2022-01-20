import React from 'react';
import Review from "./Review";
import ReviewForm from './ReviewForm';

class ReviewList extends React.Component {

    
    constructor() {
        super();
        this.state = {
            reviews : [{
                content: "A towering masterpiece."
            }, {
                content: "I hated it."
            }]
        };
    }
    

    addReview = (review) => {
        this.state.reviews.push({
            content: review
        });
        this.setState({ reviews: this.state.reviews });
    }

    
    render() {

        
        return (<div className="row">
            <h2>Reviews:</h2>
            <div className="table-responsive">
            <ReviewForm addReview={this.addReview} />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reviews.map(function (item, i) {
                            return <Review review={item.content} key={i} />;
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

export default ReviewList;

