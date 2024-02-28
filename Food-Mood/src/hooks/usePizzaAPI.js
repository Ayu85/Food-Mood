import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { PIZZA_API } from "../constants"
import { addPizzaData } from "../redux/slices/PizzaData"
const usePizzaAPI = () => {
    const pizzaData = useSelector(store => store.pizza_data.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const getPizzaData = async () => {
            const raw = await fetch(PIZZA_API)
            const json = await raw.json()
            dispatch(addPizzaData(json))
            console.log(json);
        }
        getPizzaData()
    }, [])
    setTimeout(() => {
        const d = pizzaData?.filter((data) => {
            return data?.card?.card?.widgetId == "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        })
        
    }, 1000)
}

export default usePizzaAPI
