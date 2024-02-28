import { createSlice } from "@reduxjs/toolkit";

const RestaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
        value: [],
        filteredRest: []
    },
    reducers: {
        addRestaurants: (state, action) => {
            state.value = action.payload
        },
        addFilteredRest: (state, action) => {
            state.filteredRest = action.payload
        }
    }
})
export const { addRestaurants,addFilteredRest } = RestaurantsSlice.actions
export default RestaurantsSlice.reducer