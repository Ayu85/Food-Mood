import { useSelector } from "react-redux"
import Rest_Card from "./Rest_Card"

const TopRest = () => {
    const filteredRest = useSelector(store => store.restaurants.filteredRest)

    return (
        <div className="flex flex-wrap gap-6 justify-center items-center px-20 mt-10">
            {filteredRest[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((res, key) => {
                return <Rest_Card {...res?.info} key={key} />
            })}
        </div>
    )
}

export default TopRest
