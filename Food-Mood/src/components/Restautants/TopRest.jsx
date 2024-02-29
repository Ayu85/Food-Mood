import { useSelector } from "react-redux"
import Rest_Card from "./Rest_Card"
import Shimmer from "../ShimmerUI/Shimmer"
import { Link } from 'react-router-dom'
const TopRest = () => {
    const filteredRest = useSelector(store => store.restaurants.filteredRest)

    return (
        filteredRest.length === 0 ? <Shimmer /> :
            <div className="flex flex-wrap gap-9 justify-center items-center px-20 mt-10">
                {filteredRest[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((res) => {
                    return <Link to={`/menu/${res?.info?.id}`} key={res?.info?.id}> <Rest_Card {...res?.info} /></Link>
                })}
            </div>
    )
}

export default TopRest
