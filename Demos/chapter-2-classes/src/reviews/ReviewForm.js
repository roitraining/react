import React from 'react';
import PropTypes from 'prop-types';

class ReviewForm extends React.Component {

    constructor() {
        super();
        this.state = {
            content: ""
        };

    }

    setContent(e) {
        this.setState({ content: e.target.value });
    }


    addReview = (e) => {
        e.preventDefault();
        this.props.addReview(this.state.content);
        this.setState({
            content: ""
        });
    }

    render() {
        return (
            <form className="form-group form-inline" onSubmit={this.addReview}>
                <label className="control-label">Content:
				<input type="text" className="form-control" value={this.state.content} onChange={e => this.setContent(e)} />
                </label>
                <button type="submit" className="btn btn-primary">Add Review</button>
            </form>
        );

    }
}

ReviewForm.propTypes = { addReview: PropTypes.func.isRequired };

export default ReviewForm;
