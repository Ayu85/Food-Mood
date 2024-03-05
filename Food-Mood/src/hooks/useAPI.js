import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { addFilteredRest, addRestaurants } from "../redux/slices/RestaurantData"
const useAPI = () => {
    const storeRestaurants = useSelector(store => store.restaurants.value)
    const dispatch = useDispatch()
    const location = useSelector(store => store.location.value)
    useEffect(() => {
        const getRestaurants = async () => {
            const rawData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
            const json = await rawData.json();
            dispatch(addRestaurants(json.data.cards))
        }
        getRestaurants()

    }, [])
    setTimeout(() => {
        const d = getFilteredRestaurantsData(storeRestaurants)
        dispatch(addFilteredRest(d))
    }, 1000);
    const getFilteredRestaurantsData = (storeRestaurants) => {
        return storeRestaurants?.filter((res) => {
            return res?.card?.card?.id == 'restaurant_grid_listing'
        })
    }
}

export default useAPI
