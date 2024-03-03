import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addRestaurant } from "../../redux/slices/CartSlice";
import { IMAGE_API } from "../../constants";
const Cart_Details = () => {
    const cartItems = useSelector(store => store.cart.items)
    const restaurantDetails = useSelector(store => store.menu.restDetail)

    return (
        <div className="min-w-[600px] border border-zinc-600 min-h-[500px]">
            <div className="flex justify-between px-3">
                <img src={IMAGE_API + restaurantDetails?.info?.cloudinaryImageId} alt="logo" className="w-14" />
                <h1>{restaurantDetails?.info?.name}</h1>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Cart_Details
