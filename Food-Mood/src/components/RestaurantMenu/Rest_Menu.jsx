import { useParams } from "react-router-dom"
import useMenuAPI from "../../hooks/useMenuAPI"
import Navbar from "../Navbar"

const Menu = () => {
    const id = useParams()
    useMenuAPI(id?.id)
    return (
        <div>
            <Navbar/>
        </div>
    )
}

export default Menu
