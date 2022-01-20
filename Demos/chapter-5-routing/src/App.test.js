import { render } from '@testing-library/react';
import App from './App';

jest.mock('./common/Navigation', () => () => (<div>navigation</div>));
jest.mock('./books/BookList', () => () => (<div>book list</div>));

test('it renders without crashing', () => {
  const {debug } = render(<App />);
  debug();
});
