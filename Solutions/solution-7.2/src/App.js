import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import BookListContainer from './containers/BookListContainer';
import About from './components/about/About';
import ReviewListContainer from './containers/ReviewListContainer';
import './App.css';

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <Route exact path="/" component={BookListContainer} />
          <Route path="/about" component={About} />
          <Route path="/reviews/:id/:title" component={ReviewListContainer} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
