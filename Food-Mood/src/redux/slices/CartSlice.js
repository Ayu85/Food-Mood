import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        restaurant: null
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
        },
        addRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})
export default CartSlice.reducer
export const { addItem, addPrice, removeItem, subtractPrice, addRestaurant, clearCart } = CartSlice.actions