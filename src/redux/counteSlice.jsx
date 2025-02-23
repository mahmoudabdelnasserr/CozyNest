import { createSlice } from "@reduxjs/toolkit";
const initialState = {count: 0, userName: 'Mahmoud'}

let counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.count += 1
        },

        decrease: (state, action) => {
            state.count -= 1
        },

        increaseByNum: (state, action) => {
            state.count += action.payload
        }
    }

});

export let counterReducer = counterSlice.reducer;
export let {increase, decrease, increaseByNum} = counterSlice.actions;