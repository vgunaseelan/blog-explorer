import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from '../api/api';

export const books = createAsyncThunk('books', async () => {
  return await fetchBooks();
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    book: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(books.pending, (state) => {
        state.loading = true;
      })
      .addCase(books.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(books.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
