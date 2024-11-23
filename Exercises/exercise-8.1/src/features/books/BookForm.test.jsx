import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookForm from './BookForm';
import { vi } from 'vitest';


describe('ReviewForm', () => {
  test("should call the parent function when Add Book is clicked", () => {
    const onSubmit = vi.fn();
    const { getByText } = render(<BookForm addBook={onSubmit} />);
    fireEvent.click(getByText(/Add Book/i));
    expect(onSubmit).toBeCalled();
  });

  test("should allow users to enter a title", async () => {
    const onSubmit = vi.fn();
    const input = "The Fairy Rescue League";
    render(<BookForm addBook={onSubmit} />);
    const titleInput = screen.getByLabelText(/Title:/i);
    await userEvent.type(titleInput, input);
    expect(titleInput.value).toBe(input);
  });

  test("should allow users to enter an author", async () => {
    const onSubmit = vi.fn();
    const input = "Kevin Rattan";
    render(<BookForm addBook={onSubmit} />);
    const authorInput = screen.getByLabelText(/Author:/i);
    await userEvent.type(authorInput, input);
    expect(authorInput.value).toBe(input);
  });


});



