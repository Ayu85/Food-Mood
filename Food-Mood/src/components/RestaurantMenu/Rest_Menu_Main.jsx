import { useParams } from "react-router-dom"
import useMenuAPI from "../../hooks/useMenuAPI"
import Navbar from "../Navbar"
import Rest_Details from "./Rest_Details"
import Full_Menu from "./Full_Menu"

const Menu = () => {
    const id = useParams()
    useMenuAPI(id?.id)
    return (
        <div>
            <Navbar/>
            <Rest_Details/>
            <Full_Menu/>
        </div>
    )
}

export default Menu
