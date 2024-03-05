import { createSlice } from "@reduxjs/toolkit"

const Location = createSlice({
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
export default Location.reducer;
export const { addLocation } = Location.actions
