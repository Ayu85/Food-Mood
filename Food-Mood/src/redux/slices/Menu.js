import { createSlice } from "@reduxjs/toolkit";

const Menu = createSlice({
    name: "menu",
    initialState: {
        value: [],
        filteredMenu: [],
        restDetail: null
    },
    reducers: {
        addFullMenu: (state, action) => {
            state.value = action.payload
        },
        addFilteredMenu: (state, action) => {
            state.filteredMenu = action.payload;
        },
        addRestDetails:(state,action)=>{
            state.restDetail=action.payload
        }
    }
})
export const { addFilteredMenu, addFullMenu,addRestDetails } = Menu.actions;
export default Menu.reducer