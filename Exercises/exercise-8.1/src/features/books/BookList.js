import { useEffect } from 'react';
import Book from "./Book";
import BookForm from './BookForm';
import { booksAsync, selectAllBooks } from './bookSlice';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';

function BookList() {

  const books = useSelector(state => selectAllBooks(state));

  useEffect(() => {
    store.dispatch(booksAsync());
  },
    []);

  return (
    <div className="table-responsive">
      <BookForm />
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
            books.map(function (item, i) {
              return <Book author={item.author} title={item.title} cover={item.cover || undefined} bookId={item.bookId} key={i} />;
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default BookList;