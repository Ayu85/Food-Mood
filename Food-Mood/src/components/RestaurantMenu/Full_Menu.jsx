import { useSelector } from "react-redux"

const Full_Menu = () => {
  const menuItems = useSelector(store => store.menu.filteredMenu)
  console.log(menuItems);
  return (
    <div>

    </div>
  )
}
// eslint-disable-next-line react/prop-types
const Menu_Card = ({ imageId, name, description, isVeg, price, ratings }) => {
  return <div>
    <div>
        <h1>isVeg</h1>
        <h1>{name}</h1>
        <h1>{price/100}</h1>
        <h1>{description}</h1>
    </div>
    <div>

    </div>
  </div>

}
export default Full_Menu
