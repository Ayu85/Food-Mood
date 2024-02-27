import Hero from "./Hero"
import Intro from "./Intro"

const Body = () => {
  return (
    <div className="selection:bg-[#F7B035] overflow-hidden">
        <Hero/>
        <Intro/>
    </div>
  )
}

export default Body
