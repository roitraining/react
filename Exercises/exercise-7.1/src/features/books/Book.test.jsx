import { render, screen } from '@testing-library/react';
import Book from './Book';

describe('Book', () => {
    it('should display the correct title and author when both props are passed', () => {
        render(<table><tbody><Book title="Title 1" author="Author 1" /></tbody></table>);
        const title = screen.getByText('Title 1');
        expect(title).toBeTruthy();
        const author = screen.getByText('Author 1');
        expect(author).toBeTruthy();
    });

    it('should display "unknown" when no title is passed', () => {
        render(<table><tbody><Book author="Author 2" /></tbody></table>);
        const title = screen.getByText('unknown');
        expect(title).toBeTruthy();
    });

    it('should display "unknown" when no author is passed', () => {
        render(<table><tbody><Book title="Title 2" /></tbody></table>);
        const author = screen.getByText('unknown');
        expect(author).toBeTruthy();
    });

    it('should display "unknown" for both title and author when no props are passed', () => {
        render(<table><tbody><Book /></tbody></table>);
        const both = screen.getAllByText('unknown');
        expect(both.length).toBe(2);
    });

});

