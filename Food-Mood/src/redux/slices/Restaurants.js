import { createSlice } from "@reduxjs/toolkit";

const Restaurants = createSlice({
    name: "restaurants",
    initialState: [],
    reducers: {
        addRestaurants: (state, action) => {
            state = action.payload
        }
    }
})
export const { addRestaurants } = Restaurants.actions
export default Restaurants.reducer