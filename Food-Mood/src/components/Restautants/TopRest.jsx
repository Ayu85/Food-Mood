import { useSelector } from "react-redux"
import Rest_Card from "./Rest_Card"

const TopRest = () => {
    const filteredRest = useSelector(store => store.restaurants.filteredRest)

    return (
        <div className="">
            {filteredRest[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((res, key) => {
                return <Rest_Card {...res?.info} key={key} />
            })}
        </div>
    )
}

export default TopRest
