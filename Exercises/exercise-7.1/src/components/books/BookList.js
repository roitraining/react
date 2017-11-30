import React from 'react';
import Book from './Book';
import BookForm from '../forms/BookForm';
import * as api from '../../api'

class BookList extends React.Component {

	componentWillMount() {
		this.props.receiveBooks();
	}

    addBook(title, author) {
        api.addBook({
            title: title,
            author: author,
            cover: ''
        }).then(() => {
            this.props.receiveBooks();
        });
    }

    render() {
        const { books } = this.props;
        return (<div className="table-responsive">
            <BookForm addBook={this.addBook.bind(this)} />
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Cover</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(function (item, i) {
                        return <Book author={item.author} bookId={item.bookId}
                        title={item.title} cover={item.cover || undefined}  key={i} />;
                    })}
                </tbody>
            </table>
        </div>)
    }
}

export default BookList;




