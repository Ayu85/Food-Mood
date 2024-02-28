import { createSlice } from '@reduxjs/toolkit'
const PizzaData = createSlice({
    name: "pizza-data",
    initialState: {
        value: []
    },
    reducers: {
        addPizzaData: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addPizzaData } = PizzaData.actions
export default PizzaData.reducer