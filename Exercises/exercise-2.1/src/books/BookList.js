import Book from "./Book";

function BookList() {
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
    </div>
  );
}

export default BookList;