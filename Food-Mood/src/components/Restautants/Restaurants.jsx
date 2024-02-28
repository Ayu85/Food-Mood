import useAPI from "../../hooks/useAPI"
import Navbar from "../Navbar"
import Banner from "./Banner"
import Res_Hero from "./Res_Hero"
import TopRest from "./TopRest"

const Restaurants = () => {
    useAPI()
    return (
        <div className="">
            <Navbar />
            <Res_Hero />
            <Banner />
            <TopRest />
        </div>
    )
}

export default Restaurants
