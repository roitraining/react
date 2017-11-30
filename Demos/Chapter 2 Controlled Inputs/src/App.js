import React, { Component } from 'react';
import './App.css';
import Books from './books/Books';

class App extends Component {
  render() {
    return (<div className="container">
    <Books />
  </div>
    );
  }
}

export default App;
