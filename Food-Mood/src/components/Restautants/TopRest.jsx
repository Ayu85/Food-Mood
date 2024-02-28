import { useEffect } from "react"
import { REST_API } from "../../constants"
import { useDispatch } from 'react-redux'
import { addRestaurants } from "../../redux/slices/RestaurantData"
const TopRest = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        const getRestaurants = async () => {
            const rawData = await fetch(REST_API);
            const json = await rawData.json();
            console.log(json);
            dispatch(addRestaurants(json.data.cards))
        }
        getRestaurants()
    }, [])
    return (
        <div>

        </div>
    )
}

export default TopRest
