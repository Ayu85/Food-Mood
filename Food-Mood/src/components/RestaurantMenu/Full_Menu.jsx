/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { IMAGE_API } from '../../constants'
import veg from '../../assets/veg.png'
import nonveg from '../../assets/nonveg.png'
import Full_Menu_Shimmer from "../ShimmerUI/MenuShimmer/Full_Menu_Shimmer"
import { useState } from "react"
const Full_Menu = () => {
  const menuItems = useSelector(store => store.menu.filteredMenu)
  const [showData, setShowData] = useState(false)
  setTimeout(() => {
    setShowData(true)
  }, 4000);
  console.log(menuItems);
  return !showData ? <Full_Menu_Shimmer /> : (
    <div className="flex flex-col border px-2 border-slate-300 mt-5">
      <h1 className="text-lg font-bold mt-5">{menuItems[0]?.card?.card?.title}</h1>
      <div>
        {menuItems[0]?.card?.card?.itemCards?.map((items) => {
          return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
        })}
      </div>
    </div>
  )
}
const Menu_Card = ({ imageId, name, description, isVeg, price }) => {
  return <div className="flex lg:max-w-[900px] md:min-w-[700px] min-w-[450px] mt-1 items-center gap-56 justify-between border-b border-b-slate-300 py-2">
    <div>
      <img src={isVeg ? veg : nonveg} alt="" className="w-7" />
      <h1 className="text-md font-bold">{name}</h1>
      <h1>Rs.{price / 100}</h1>
      <h1 className="line-clamp-2 font-light text-sm pt-2 lg:line-clamp-none md:line-clamp-none">{description?.substring(0, 80)}</h1>
    </div>
    <div>
      <img src={IMAGE_API + imageId} alt="" className="w-28 h-24 hidden md:block lg:block" />
    </div>
  </div>

}
export default Full_Menu
