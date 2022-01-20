import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from './ReviewForm';

test("it should call the parent function when Add Review is clicked", () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<ReviewForm addReview={onSubmit} />);
    fireEvent.click(getByText(/Add Review/i));
    expect(onSubmit).toBeCalled();
  });

test("it should allow users to enter a review", () => {
    const onSubmit = jest.fn();
    const input = "A great book";
    render(<ReviewForm addReview={onSubmit} />);
    userEvent.type(screen.getByLabelText(/Review:/i), input);
    expect(screen.getByLabelText(/Review:/i)).toHaveValue(input);
  });



