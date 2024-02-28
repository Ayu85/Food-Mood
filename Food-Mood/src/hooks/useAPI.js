import { useEffect } from "react";
import { useSelector } from "react-redux";
import { REST_API } from "../constants"
import { useDispatch } from 'react-redux'
import { addFilteredRest, addRestaurants } from "../redux/slices/RestaurantData"
const useAPI = () => {
    const storeRestaurants = useSelector(store => store.restaurants.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const getRestaurants = async () => {
            const rawData = await fetch(REST_API);
            const json = await rawData.json();
            console.log(json);
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
