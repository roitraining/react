import React from 'react';
import Navigation from './components/common/Navigation';
import BookList from './books/BookList'
import './App.css';

const App = () =>  (
      <div className="container-fluid">
        <Navigation />
        <div className="container">
         <BookList />
        </div>
      </div>
    );

export default App;
