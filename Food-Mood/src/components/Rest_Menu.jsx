import { useParams } from "react-router-dom"
import useMenuAPI from "../hooks/useMenuAPI"

const Menu = () => {
    const id = useParams()
    useMenuAPI(id?.id)
    return (
        <div>
            menu page
        </div>
    )
}

export default Menu
