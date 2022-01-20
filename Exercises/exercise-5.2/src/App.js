import './App.css';
import BookList from './books/BookList';
import Navigation from './common/Navigation';
import ReviewList from './reviews/ReviewList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<BookList />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
