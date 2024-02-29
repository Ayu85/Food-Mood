import { createSlice } from "@reduxjs/toolkit";

const Menu = createSlice({
    name: "menu",
    initialState: {
        value: [],
        filteredMenu: []
    },
    reducers: {
        addFullMenu: (state, action) => {
            state.value = action.payload
        },
        addFilteredMenu: (state, action) => {
            state.filteredMenu = action.payload;
        }
    }
})
export const { addFilteredMenu, addFullMenu } = Menu.actions;
export default Menu.reducer