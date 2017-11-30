import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import BookList from './components/books/BookList';
import About from './components/about/About';
import ReviewList from './components/reviews/ReviewList';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <Navigation />
      <div className="container">
          <Route exact path="/" component={BookList} />
          <Route path="/about" component={About} />
          <Route path="/reviews/:id/:title" component={ReviewList} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
