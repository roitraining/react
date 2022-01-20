import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function BookForm({addBook}) {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function createBook(e) {
    e.preventDefault();
    addBook({title, author});
    navigate('/about');
  }

  return (
    <form className="form-group form-inline" onSubmit={createBook}>
      <label className="control-label">Title:
        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label className="control-label">Author:
        <input type="text" className="form-control" value={author} onChange={e => setAuthor(e.target.value)} />
      </label>
      <button type="submit" className="btn btn-primary">Add Book</button>
    </form>
  );
}

export default BookForm;