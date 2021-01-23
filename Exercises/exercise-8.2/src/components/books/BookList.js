import React from 'react';
import Book from './Book';
import BookFormContainer from '../../containers/BookFormContainer';
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
        this.props.receiveBooks();
    }

    addBook = (title, author) => {
        api.addBook({
               title: title,
                author: author,
                cover: ''
        }).then(() => {
            this.getBooks();
      });
    }
    
    render() {
        return (
            <div className="table-responsive">
                <BookFormContainer />
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
                        this.props.books.map(function (item, i) {
                            return <Book author={item.author} 
                            title={item.title} 
                            cover={item.cover || undefined} 
                            bookId={item.bookId}
                            key={i} />;
                        })
                        }

                    </tbody>

                </table>

            </div>)
    }
}

export default BookList;
