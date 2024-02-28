import { useEffect } from "react";
import { useSelector } from "react-redux";

const TopRest = () => {
    const storeRestaurants = useSelector(store => store.restaurants.value)
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
       
    }, [])
  
    
    return (
        <div>

        </div>
    )
}

export default TopRest
