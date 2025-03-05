import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    products: [],
    selectedProduct: {},
}

const base_URL = 'https://coffee-shop-api-sandy.vercel.app/api/v1/products';

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await axios.get(base_URL);
    return response.data.map(product => ({...product, enable: false}));
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedProduct: (state,action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
    }
})

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer
