import { useEffect } from "react"
import { REST_API } from "../../constants"

const TopRest = () => {
    useEffect(() => {
        const getRestaurants = async () => {
            const rawData = await fetch(REST_API);
            const json = await rawData.json();
            console.log(json);
        }
        getRestaurants()
    }, [])
    return (
        <div>

        </div>
    )
}

export default TopRest
