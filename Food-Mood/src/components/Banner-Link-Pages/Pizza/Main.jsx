import Navbar from "../../Navbar"
import PizzaContent from "./PizzaContent"
import PizzaHero from './PizzaHero'
import usePizzaAPI from '../../../hooks/usePizzaAPI'
const Main = () => {
    usePizzaAPI()
    return (
        <div>
            <Navbar />
            <PizzaHero />
            <PizzaContent />
        </div>
    )
}

export default Main
