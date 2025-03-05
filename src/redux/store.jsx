import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import basketReducer from './slices/basketSlice';
import wishReducer from './slices/wishSlice';
import commentReducer from './slices/commentSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    basket: basketReducer,
    wish: wishReducer,
    comment: commentReducer
  },
})
