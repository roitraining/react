import React from 'react';
import Review from "./Review";
import ReviewFormContainer from '../../containers/ReviewFormContainer';

class ReviewList extends React.Component {

	componentWillMount() {
		this.props.receiveReviews(this.props.match.params.id);
	}

	render() {
		const { reviews, match: { params: { title} } } = this.props;
		return (<div className="row">
			<h2>Reviews of {title}:</h2>
			<ReviewFormContainer id={this.props.match.params.id} />
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
						})}
					</tbody>
				</table>
			</div>
		</div>);
	}
}

export default ReviewList; 
