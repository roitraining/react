import { fireEvent, render, screen } from '@testing-library/react';
import ReviewForm from './ReviewForm';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('ReviewForm', () => {
    it('should call the parent function when Add Review is clicked', () => {
        const onSubmit = vi.fn();
        render(<ReviewForm addReview={onSubmit} />);
        const button = screen.getByText(/Add Review/i);
        fireEvent.click(button)
        expect(onSubmit).toHaveBeenCalled();
    });

     it("should allow users to enter a review", async () => {
        const onSubmit = vi.fn();
        const input = "A great book";
        render(<ReviewForm addReview={onSubmit} />);
        const reviewInput = screen.getByLabelText(/Review:/i);
        await userEvent.type(reviewInput, input);
        expect(reviewInput.value).toBe(input);
    });

});

