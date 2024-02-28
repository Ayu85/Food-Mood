import { useEffect } from "react"
import Hero from "./Hero"
import Intro from "./Intro"
import Navbar from "./Navbar"
import { REST_API } from "../constants"
import { useDispatch, useSelector } from 'react-redux'
import { addFilteredRest, addRestaurants } from "../redux/slices/RestaurantData"
const Body = () => {
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
  return (
    <div className="selection:bg-[#F7B035] overflow-hidden">
      <Navbar />
      <Hero />
      <Intro />
    </div>
  )
}

export default Body
