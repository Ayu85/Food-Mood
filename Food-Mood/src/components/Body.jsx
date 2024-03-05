// import { useEffect } from "react"
import Hero from "./Hero"
import Intro from "./Intro"
import Navbar from "./Navbar"

const Body = () => {
  return (
    <div className="selection:bg-[#F7B035] overflow-hidden">
      <Navbar />
      <Hero />
      <Intro />
    </div>
  )
}

export default Body
