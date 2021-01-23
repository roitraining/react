import React from 'react';
import Book from './Book';

class BookList extends React.Component {
    render() {
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
                        <Book />
                    </tbody>

                </table>

            </div>)
    }
}

export default BookList;
