import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name: 'navslice',
    initialState: {
        value: false
    },
    reducers: {
        toogleNav: (state,action) => {
            state.value = action.payload
        }
    }
})
export default NavSlice.reducer
export const { toogleNav } = NavSlice.actions