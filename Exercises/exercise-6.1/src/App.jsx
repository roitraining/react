import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>         
      </header>
    </div>
  );
}

export default App;
