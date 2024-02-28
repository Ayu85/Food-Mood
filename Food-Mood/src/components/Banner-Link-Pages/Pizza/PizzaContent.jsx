import { useEffect } from "react"
import { PIZZA_API } from "../../../constants"
const PizzaContent = () => {
    useEffect(() => {
        const getPizzaData = async () => {
            const raw = await fetch(PIZZA_API)
            const json = await raw.json()
            console.log(json);
        }
        getPizzaData()
    }, [])
    return (
        <div>
            hello
        </div>
    )
}

export default PizzaContent
