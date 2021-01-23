import { render, screen } from '@testing-library/react';
import Review from './Review';

test('it should build the table row from strings passed as props', () => {
    const input = 'A masterpiece';
    render(<table><tbody><Review review={input} /></tbody></table>);
    const review = screen.getByText(input);
    expect(review).toBeInTheDocument();
});
