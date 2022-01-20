import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

const initialState = {
  value: [],
  status: 'empty'
};

export const booksAsync = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    return await api.fetchAllBooks();
  }
);

export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async (book) => {
    return await api.addBook(book);
  }
);

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(booksAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = [action.payload, ...state.value];
      });
  }
});


export const selectAllBooks = state => state.books.value;

export const selectBookById = (state, id) => {
  return state.books.value.find(item => item.bookId === id);
}


export default bookSlice.reducer;