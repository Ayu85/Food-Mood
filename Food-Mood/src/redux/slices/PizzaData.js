import { createSlice } from '@reduxjs/toolkit'
const PizzaData = createSlice({
    name: "pizza-data",
    initialState: {
        value: [],
        filteredData: []
    },
    reducers: {
        addPizzaData: (state, action) => {
            state.value = action.payload
        },
        setFilteredPizzaData: (state, action) => {
            state.filteredData = action.payload
        }
    }
})
export const { addPizzaData,setFilteredPizzaData } = PizzaData.actions
export default PizzaData.reducer