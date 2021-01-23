

import React from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';
import UpdateBookForm from './UpdateBookForm';

class Books extends React.Component {	
		
	constructor() {
		super();
		this.state = {
						title: "The Hobbit",
						author: "J R R Tolkien"
					};	
	}
		
	setTitle = (e) => {
		this.setState({title: e.target.value});
	}	
		
		
	render() {

		return (<div className="container">
				<h2>Books</h2>
				<div className="table-responsive">
					<table className="table table-bordered table-striped">
					<thead>
						<tr>
							<th>Book</th>
							<th>Author</th>
						</tr>
					</thead>
					<tbody>
						<Book author={this.state.author} title={this.state.title}  />
					</tbody>
					</table>
				</div>
				  <h2>Add a book</h2>
				  <AddBookForm />
				  <h2>Update a book</h2>
				  <UpdateBookForm title={this.state.title} changeTitle={this.setTitle} />
			</div>);
	 }
}

export default Books;