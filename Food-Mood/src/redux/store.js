import { configureStore } from '@reduxjs/toolkit'
import NavSlice from './slices/NavScrolled';
import RestaurantData from './slices/RestaurantData';
import PizzaData from './slices/PizzaData';

const store = configureStore({
    reducer: {
        nav_slice: NavSlice,
        restaurants: RestaurantData,
        pizza_data: PizzaData
    }
})
export default store;