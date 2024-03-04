/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { IMAGE_API } from '../../constants'
import veg from '../../assets/veg.png'
import nonveg from '../../assets/nonveg.png'
import Full_Menu_Shimmer from "../ShimmerUI/MenuShimmer/Full_Menu_Shimmer"
import { useState } from "react"
import { addItem, addPrice } from '../../redux/slices/CartSlice'
const Full_Menu = () => {
  const menuItems = useSelector(store => store.menu.filteredMenu)
  const [showData, setShowData] = useState(false)
  setTimeout(() => {
    setShowData(true)
  }, 2000);
  return !showData ? <Full_Menu_Shimmer /> : (
    <>
      <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[0]?.card?.card?.title}</h1>
        <div>
          {menuItems[0]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div>
      <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[1]?.card?.card?.title}</h1>
        <div>
          {menuItems[1]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div>
      <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[2]?.card?.card?.title}</h1>
        <div>
          {menuItems[2]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div>
      <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[3]?.card?.card?.title}</h1>
        <div>
          {menuItems[3]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div>
      <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[4]?.card?.card?.title}</h1>
        <div>
          {menuItems[4]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div> <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[5]?.card?.card?.title}</h1>
        <div>
          {menuItems[5]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div> <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[6]?.card?.card?.title}</h1>
        <div>
          {menuItems[6]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div> <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[7]?.card?.card?.title}</h1>
        <div>
          {menuItems[7]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div> <div className="flex flex-col border px-2 border-slate-300 mt-5">
        <h1 className="text-lg font-bold mt-5">{menuItems[8]?.card?.card?.title}</h1>
        <div>
          {menuItems[8]?.card?.card?.itemCards?.map((items) => {
            return <Menu_Card {...items?.card?.info} key={items?.info?.id} />
          })}
        </div>
      </div>
    </>
  )
}
const Menu_Card = ({ imageId, name, description, isVeg, price }) => {
  const dispatch = useDispatch()
  return <div className="flex lg:max-w-[900px] lg:min-w-[900px] md:min-w-[700px] min-w-[450px] max-w-[450px] mt-1 items-center gap-56 justify-between border-b border-b-slate-300 py-2">
    <div>
      <img src={isVeg ? veg : nonveg} alt="" className="w-7" />
      <h1 className="text-md font-bold">{name}</h1>
      <h1>Rs.{price / 100}</h1>
      <h1 className="line-clamp-2 font-light text-sm pt-2 lg:line-clamp-none md:line-clamp-none">{description?.substring(0, 80)}</h1>
    </div>
    <div className="flex flex-col items-center gap-1 text-green-700">
      <img src={IMAGE_API + imageId} alt="" className="w-28 h-24 hidden md:block lg:block" />
      <button onClick={() => {
        dispatch(addItem({ name: name, price: price / 100, description: description, img: imageId, isVeg: isVeg }))
        dispatch(addPrice(price / 100))
      }} className="border border-slate-300 font-semibold w-28 py-1 active:bg-black active:scale-125 transition-all">Add+</button>
    </div>
  </div>

}
export default Full_Menu
