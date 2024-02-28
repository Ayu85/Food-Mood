import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { PIZZA_API } from "../../../constants"
import { addPizzaData } from "../redux/slices/PizzaData"
const usePizzaAPI = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getPizzaData = async () => {
            const raw = await fetch(PIZZA_API)
            const json = await raw.json()
            dispatch(addPizzaData(json))
        }
        getPizzaData()
    }, [])
}

export default usePizzaAPI
