import { useParams } from "react-router-dom"

const Menu = () => {
    const id=useParams()
    console.log(id?.id);
    return (
        <div>
            menu page
        </div>
    )
}

export default Menu
