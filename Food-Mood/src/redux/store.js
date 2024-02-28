import { configureStore } from '@reduxjs/toolkit'
import NavSlice from './slices/NavScrolled';
import Restaurants from '../components/Restautants/Restaurants';
const store = configureStore({
    reducer: {
        nav_slice: NavSlice,
        restaurants: Restaurants
    }
})
export default store;