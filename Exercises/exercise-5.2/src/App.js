import Navigation from './components/common/Navigation';
import BookList from './components/books/BookList';
// import ReviewList from './components/reviews/ReviewList';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/about/About';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <Route exact path="/" component={BookList} />
          <Route  path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
