import {  useSelector } from "react-redux"
import { IMAGE_API } from "../../constants";
import veg from '../../assets/veg.png'
import nonveg from '../../assets/nonveg.png'
const Cart_Details = () => {
    const cartItems = useSelector(store => store.cart.items)
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    const totalPrice = useSelector(store => store.cart.totalPrice)
    return (
        <div className="lg:min-w-[600px] min-w-[450px] py-3 md:min-w-[600px] shadow-2xl shadow-[#CE862B] lg:max-w-[600px] md:max-w-[600px] border-zinc-600 min-h-[400px] mt-52">
            <div className="flex  justify-between px-3 items-center py-3 border-b border-b-zinc-300">
                <div>
                    <h1 className="font-semibold text-lg font-[gorg-regular]">{restaurantDetails?.name}</h1>
                    <h1 className="font-light text-sm font-[gorg-regular]">{restaurantDetails?.areaName}</h1>
                </div>
                <img src={IMAGE_API + restaurantDetails?.cloudinaryImageId} alt="logo" className="w-24 h-20" />
            </div>
            <div>
                <div className="flex  flex-col gap-2 px-5 pt-10 pb-2 border-b border-slate-600">
                    {cartItems?.map((item) => {
                        return <div key={item?.id} className="flex justify-between font-semibold items-center gap-2">
                            <div className="flex items-center gap-2">
                                <h1><img src={item.isVeg === 1 ? veg : nonveg} alt="" className="w-5" /></h1>
                                <h1 className="line-clamp-1">{item?.name?.substring(0, 30)}</h1>
                            </div>
                            <h1 className="text-slate-600">Rs. {item?.price}</h1>
                        </div>
                    })}
                </div>
            </div>
            <div className="flex font-semibold justify-between px-5 items-center py-3 border-b border-b-zinc-600">
                <h1 className="text-lg">Total </h1>
                <h1>Rs. {totalPrice}</h1>
            </div>
            <div className="flex items-center justify-center mt-10 ">
                <h1 className="bg-[#00D26A] cursor-pointer hover:bg-yellow-500 transition-all hover:scale-110 duration-100 text-white font-semibold text-lg w-72 py-2 text-center">Proceed To Pay Rs. {totalPrice}</h1>
            </div>
        </div>
    )
}

export default Cart_Details
