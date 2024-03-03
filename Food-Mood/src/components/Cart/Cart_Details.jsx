import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addRestaurant } from "../../redux/slices/CartSlice";
import { IMAGE_API } from "../../constants";
import veg from '../../assets/veg.png'
import nonveg from '../../assets/nonveg.png'
const Cart_Details = () => {
    const cartItems = useSelector(store => store.cart.items)
    const restaurantDetails = useSelector(store => store.menu.restDetail)

    return (
        <div className="min-w-[600px] shadow-2xl shadow-[#CE862B] max-w-[600px]  border-zinc-600 min-h-[500px] mt-52">
            <div className="flex justify-between px-3 items-center py-3 border-b border-b-zinc-300">
                <div>
                    <h1 className="font-semibold text-lg font-[gorg-regular]">{restaurantDetails?.name}</h1>
                    <h1 className="font-light text-sm font-[gorg-regular]">{restaurantDetails?.areaName}</h1>
                </div>
                <img src={IMAGE_API + restaurantDetails?.cloudinaryImageId} alt="logo" className="w-24 h-20" />
            </div>
            <div>
                <div>
                    {cartItems?.map((item) => {
                        return <div key={item?.info?.id}>
                            <h1><img src={item.isVeg===1 ? veg : nonveg} alt="" /></h1>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart_Details
