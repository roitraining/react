import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/bookSlice';
import reviewReducer from '../features/reviews/reviewSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    reviews: reviewReducer,
  },
  devTools: true,
});
