import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name: 'navslice',
    initialState: {
        value: false
    },
    reducers: {
        toogleNav: (state) => {
            state.value = !state.value
        }
    }
})
export default NavSlice.reducer
export const { toogleNav } = NavSlice.actions