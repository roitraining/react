import Navigation from './components/common/Navigation';
import BookList from './components/books/BookList';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/about/About';
import Faq from './components/about/Faq';
import Forbidden from './components/common/Forbidden';
import PrivateRoute from './components/common/PrivateRoute';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <Route exact path="/" component={BookList} />
          <Route  path="/about" component={About} />
          <PrivateRoute path="/faq" component={Faq} />
          <Route path="/forbidden" component={Forbidden} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
