import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../slices/authSlice"
import blogSlice from "../slices/blogSlice"
import productSlice from "../slices/productSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productSlice,
        blogs: blogSlice
    }
});

export default store