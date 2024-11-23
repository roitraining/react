import './App.css'
import Navigation from './common/Navigation';
import BookList from './books/BookList';
import About from './about/About';
import ErrorPage from './common/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './protected/Protected';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<BookList />} />
          <Route path="about/*" element={<About />} />
          <Route path="*" element={<ErrorPage />} /> 
          <Route path="protected" element={<Protected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
