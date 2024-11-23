
import AddBookForm from "./AddBookForm";
import UpdateBookForm from "./UpdateBookForm";


function BookList() {

  return (
    <div>
      <h2>Adding a new book</h2>
      <AddBookForm />
      <h2>Updating an existing book</h2>
      <UpdateBookForm title="The Hobbit" />
    </div>
  );
}

export default BookList;