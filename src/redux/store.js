import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counteSlice";
import { productReducer } from "./productsSlice";

export let store = configureStore({
    reducer: {
        counterReducer,
        productReducer
    }
});