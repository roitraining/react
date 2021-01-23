import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/common/Navigation', () => () => (<div>navigation</div>));
jest.mock('./components/books/BookList', () => () => (<div>book list</div>));

test('it renders without crashing', () => {
  const {debug } = render(<App />);
  debug();
});
