import './App.css'
import Navigation from './features/common/Navigation';
import BookList from './features/books/BookList';
import About from './features/about/About';
import ErrorPage from './features/common/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewList from './features/reviews/ReviewList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<BookList />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} /> 
          <Route path="/reviews/:bookId/:title" element={<ReviewList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
