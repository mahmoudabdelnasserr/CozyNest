import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {isLoading: false, products: [], error: null}

export let getProducts = createAsyncThunk('productSlice/getProducts', async () => {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    return data.data
})

let productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })

        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export let productReducer = productSlice.reducer