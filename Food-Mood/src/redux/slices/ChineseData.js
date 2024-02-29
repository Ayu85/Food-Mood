import { createSlice } from '@reduxjs/toolkit'
const ChineseFood = createSlice({
    name: "chinese",
    initialState: {
        value: [],
        filteredChinese: []
    },
    reducers: {
        addChineseRest: (state, action) => {
            state.value = action.payload
        },
        addFilteredChinese: (state, action) => {
            state.filteredChinese = action.payload
        }
    }
})
export const { addChineseRest, addFilteredChinese } = ChineseFood.actions;
export default ChineseFood.reducer