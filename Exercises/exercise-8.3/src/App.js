import './App.css';
import BookList from './features/books/BookList';
import Navigation from './features/common/Navigation';
import ReviewList from './features/reviews/ReviewList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './features/about/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<BookList />} />
          <Route path="about" element={<About />} />
          <Route path="/reviews/:bookId/:title" element={<ReviewList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
