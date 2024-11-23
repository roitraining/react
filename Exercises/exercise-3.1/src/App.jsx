import './App.css'
import Navigation from './common/Navigation';
import BookList from './books/BookList';
import ReviewList from './reviews/ReviewList';


function App() {

  // These temporary variables make it easy to swith between
  // reviews and books until we learn how to use routing.
  // the following comment prevents the linter complaining
  // about unusued variables.
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Temp" }]*/
  const booksTemp = <BookList />;
  const reviewsTemp = <ReviewList />

  return (
    <div className="container-fluid">
      <Navigation />
      <div className="container">
        {booksTemp}
      </div>
    </div>
  );
}

export default App
