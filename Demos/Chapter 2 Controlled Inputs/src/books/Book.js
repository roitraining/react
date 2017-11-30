import React from 'react';

class Book extends React.Component {
	render() {
		return <tr>
			<td>{this.props.title}</td>
			<td>{this.props.author}</td>
		</tr>;
	}

}
						   
export default Book;