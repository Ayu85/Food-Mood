// import { useEffect } from "react"
import LocationAPI from "../hooks/useLocationAPI"
import Hero from "./Hero"
import Intro from "./Intro"
import Navbar from "./Navbar"

const Body = () => {
  LocationAPI()
  return (
    <div className="selection:bg-[#F7B035] overflow-hidden">
      <Navbar />
      <Hero />
      <Intro />
    </div>
  )
}

export default Body
