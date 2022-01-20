import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

const initialState = {
  value: [],
  status: 'empty'
};

export const reviewsAsync = createAsyncThunk(
  'reviews/fetchReviews',
  async (bookId) => {
    return await api.fetchReviews(bookId);
  }
);


export const addReviewAsync = createAsyncThunk(
  'reviews/addReview',
  async (review) => {
    return await api.addReview(review);
  }
);

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
   extraReducers: (builder) => {
    builder
    .addCase(reviewsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value = action.payload;
    })
    .addCase(addReviewAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value = [action.payload, ...state.value];
    });
  }
});

export const { reviews } = reviewSlice.actions;

export const selectAllReviews = state => state.reviews.value;

export default reviewSlice.reducer;