import Navigation from './components/common/Navigation';
import BookList from './components/books/BookList';
// import ReviewList from './components/reviews/ReviewList';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Navigation />
      <div className="container">
        <BookList />
      </div>
    </div>
  );
}

export default App;
