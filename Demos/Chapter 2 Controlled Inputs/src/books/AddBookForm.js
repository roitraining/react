

import React from 'react';

class AddBookForm extends React.Component {
	
	constructor() {
		super();
		this.state = {title: "Add Book"};	
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
					<label>2. Title (one way state):<input type="text" className="form-control" onChange={this.setTitle} /></label>
					current state: {this.state.title}
				</div>
				<div className="form-group">
					<label>3. Title (controlled):<input type="text" className="form-control" value={this.state.title} onChange={this.setTitle} /></label>
				</div>
				</form>);
	}

}
				   
export default AddBookForm;