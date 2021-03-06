import Navigation from './components/common/Navigation';
import BookList from './components/books/BookList';
import ReviewListContainer from './containers/ReviewListContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/about/About';
import { Provider } from 'react-redux';

import './App.css';

function App({store}) {
  return (
    <Provider store={store}>    
      <BrowserRouter>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <Route exact path="/" component={BookList} />
          <Route  path="/about" component={About} />
          <Route path="/reviews/:bookId/:title" component={ReviewListContainer} />
        </div>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
