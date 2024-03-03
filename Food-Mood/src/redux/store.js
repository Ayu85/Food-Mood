import { configureStore } from '@reduxjs/toolkit'
import NavSlice from './slices/NavScrolled';
import RestaurantData from './slices/RestaurantData';
import PizzaData from './slices/PizzaData';
import ChineseData from './slices/ChineseData';
import Menu from './slices/Menu';
import CartSlice from './slices/CartSlice';

const store = configureStore({
    reducer: {
        nav_slice: NavSlice,
        restaurants: RestaurantData,
        pizza_data: PizzaData,
        chinese_data: ChineseData,
        menu: Menu,
        cart: CartSlice
    }
})
export default store;