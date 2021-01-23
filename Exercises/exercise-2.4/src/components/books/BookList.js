import React from 'react';
import Book from './Book';
import BookForm from '../forms/BookForm';

class BookList extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [{
                title: "The Lord Of The Rings",
                author: "J R R Tolkien"
            }, {
                title: "The Hobbit",
                author: "J R R Tolkien"
            }]
        };
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.books.map(function (item, i) {
                            return <Book author={item.author} title={item.title} key={i} />;
                        })
                        }

                    </tbody>

                </table>

            </div>)
    }
}

export default BookList;
