import { useSelector } from "react-redux"

const Full_Menu = () => {
  const menuItems = useSelector(store => store.menu.filteredMenu)
  console.log(menuItems);
  return (
    <div>

    </div>
  )
}
const Menu_Card = ({ imageId, name, description, isVeg, price, ratings }) => {
  return <div></div>

}
export default Full_Menu
