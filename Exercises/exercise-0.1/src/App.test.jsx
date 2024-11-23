import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {

    vi.mock('./common/Navigation', () => ({
        default: () => <div>navigation</div>
      }));

    vi.mock('./books/BookList', () => ({
        default: () => <div>book list</div>
      }));

    render(<App />);

    screen.debug();

  });
});