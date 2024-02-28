import { configureStore } from '@reduxjs/toolkit'
import NavSlice from './slices/NavScrolled';
import RestaurantData from './slices/RestaurantData';

const store = configureStore({
    reducer: {
        nav_slice: NavSlice,
        restaurants: RestaurantData
    }
})
export default store;