import React from 'react';
import Book from './Book';
import BookForm from '../forms/BookForm';
import * as api from '../../api'; 

class BookList extends React.Component {

    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        return api.fetchAllBooks().then((response) => {
            this.setState({ books: response });
        });
    }

    addBook = (title, author) => {
        this.state.books.push({
            title: title,
            author: author
        });
        this.setState({ books: this.state.books });
   }


    render() {
        return (
            <div className="table-responsive">
                <BookForm addBook={this.addBook} />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>Author</th>
                            <th>Cover</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.books.map(function (item, i) {
                            return <Book author={item.author} title={item.title} cover={item.cover || undefined} key={i} />;
                        })
                        }

                    </tbody>

                </table>

            </div>)
    }
}

export default BookList;
