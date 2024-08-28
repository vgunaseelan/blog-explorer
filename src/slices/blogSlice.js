import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBlogs } from '../api/api';

export const fetchAllBlogs = createAsyncThunk('blogs', async () => {
    return await fetchBlogs();
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default blogsSlice.reducer;
