/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { IMAGE_API } from '../../constants'
import veg from '../../assets/veg.png'
import nonveg from '../../assets/nonveg.png'
const Full_Menu = () => {
  const menuItems = useSelector(store => store.menu.filteredMenu)
  console.log(menuItems);
  return (
    <div>
      {menuItems[0]?.card?.card?.itemCards?.map((items) => {
        return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
      })}
    </div>
  )
}
const Menu_Card = ({ imageId, name, description, isVeg, price }) => {
  return <div className="flex items-center gap-56 justify-between border-b border-b-slate-300 py-2">
    <div>
      <img src={isVeg ? veg : nonveg} alt="" className="w-7" />
      <h1 className="text-md font-bold">{name}</h1>
      <h1>Rs.{price / 100}</h1>
      <h1 className="line-clamp-2 font-light text-sm pt-2 lg:line-clamp-none md:line-clamp-none">{description?.substring(0,80)}</h1>
    </div>
    <div>
      <img src={IMAGE_API + imageId} alt="" className="w-28 h-24 hidden md:block lg:block" />
    </div>
  </div>

}
export default Full_Menu
