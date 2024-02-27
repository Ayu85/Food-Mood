import { configureStore } from '@reduxjs/toolkit'
import NavSlice from './slices/NavScrolled';
const store = configureStore({
    reducer: {
        nav_slice: NavSlice
    }
})
export default store;