import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        addPrice: (state, action) => {
            state.totalPrice += action.payload
        },
        subtractPrice: (state, action) => {
            state.totalPrice -= action.payload
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload)
        }
    }
})
export default cartSlice.reducer
export const { addItem, addPrice, removeItem, subtractPrice } = cartSlice.actions