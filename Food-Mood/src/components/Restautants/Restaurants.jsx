import { useEffect } from "react"
import Navbar from "../Navbar"
import Banner from "./Banner"
import Res_Hero from "./Res_Hero"
import TopRest from "./TopRest"

const Restaurants = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    }, [])
    return (
        <div className="">
            <Navbar />
            <Res_Hero />
            <Banner />
            <TopRest/>
        </div>
    )
}

export default Restaurants
