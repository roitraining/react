

import React from 'react';

class UpdateBookForm extends React.Component {
	
	constructor() {
		super();
		this.state = {title: "Update Title"};	
	}
	
	setTitle = (e) => {
		this.setState({title: e.target.value});
	}


	render() {
		return 	(<form>
				<div className="form-group">
					<label>1. Title (uncontrolled):<input type="text" className="form-control" /></label>
				</div>
				<div className="form-group">
					<label>2. Title (controlled not working):<input type="text" className="form-control" value={this.props.title}  onChange={this.setTitle} /></label>
				</div>
				<div className="form-group">
					<label>3. Title (controlled):<input type="text" className="form-control" value={this.props.title} onChange={this.props.changeTitle} /></label>
				</div>
				</form>);
	}

}

export default UpdateBookForm;