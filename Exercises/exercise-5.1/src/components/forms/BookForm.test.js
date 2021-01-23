import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookForm from './BookForm';

test("it should call the parent function when Add Book is clicked", () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<BookForm addBook={onSubmit} />);
    fireEvent.click(getByText(/Add Book/i));
    expect(onSubmit).toBeCalled();
  });

test("it should allow users to enter a title", () => {
    const onSubmit = jest.fn();
    const input = "The Fairy Rescue League";
    render(<BookForm addBook={onSubmit} />);
    userEvent.type(screen.getByLabelText(/title/i), input);
    expect(screen.getByLabelText(/title/i)).toHaveValue(input);
  });

test("it should allow users to enter an author", () => {
    const onSubmit = jest.fn();
    const input = "Kevin Rattan";
    render(<BookForm addBook={onSubmit} />);
    userEvent.type(screen.getByLabelText(/author/i), input);
    expect(screen.getByLabelText(/author/i)).toHaveValue(input);
  });

