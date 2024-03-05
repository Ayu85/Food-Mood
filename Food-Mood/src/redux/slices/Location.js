import { createSlice } from "@reduxjs/toolkit"

const location = createSlice({
    name: 'location',
    initialState: {
        value: { latitude: 26.8524588, longitude: 81.0202533 }
    },
    reducers: {
        addLocation: (state, action) => {
            state.value = action.payload
        }
    }

})
export default location.reducer;
export const { addLocation } = location.actions
