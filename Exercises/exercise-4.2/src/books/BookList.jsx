import { useState, useEffect } from 'react';
import Book from "./Book";
import BookForm from './BookForm';
import * as api from '../api';

function BookList() {

  const [books, setBooks] = useState([]);

  function addBook(book) {
    setBooks([...books, book]);
  }


  function getBooks() {
    api.fetchAllBooks().then((books) => {
      setBooks(books);
    });
  }

  useEffect(() => {
    getBooks();
  },
    []);

  return (
    <div className="table-responsive">
      <BookForm addBook={addBook} />
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
              return <Book author={item.author} title={item.title} cover={item.cover || undefined} key={i} />;
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default BookList;