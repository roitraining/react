import { useState } from 'react';

function AddBookForm() {

  const [title, setTitle] = useState("");

  return (
    <form>
      <div className="form-group">
        <label>1. Title (uncontrolled):<input type="text" className="form-control" /></label>
      </div>
      <div className="form-group">
        <label>2. Title (one way state):<input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} /></label>
        current state: {title}
      </div>
      <div className="form-group">
        <label>3. Title (controlled):<input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} /></label>
      </div>
    </form>
  );
}

export default AddBookForm;