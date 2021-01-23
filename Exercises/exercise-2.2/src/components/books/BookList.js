import React from 'react';
import Book from './Book';

class BookList extends React.Component {

    render() {

        const books = [{
            title: "The Lord Of The Rings",
            author: "J R R Tolkien"
        }, {
            title: "The Hobbit",
            author: "J R R Tolkien"
        }, {
            title: "The Silmarillion"
        }, {
            author: "R A Heinlein"
        }];

        return (
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        books.map(function (item, i) {
                            return <Book author={item.author} title={item.title} key={i} />;
                        })
                        }

                    </tbody>

                </table>

            </div>)
    }
}

export default BookList;
