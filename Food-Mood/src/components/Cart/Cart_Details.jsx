import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addRestaurant } from "../../redux/slices/CartSlice";
const Cart_Details = () => {
    const cartItems = useSelector(store => store.cart.items)
    const restaurantDetails = useSelector(store => store.menu.restDetail)
   
    return (
        <div className="min-w-[600px] border border-zinc-600 min-h-[500px]">
            <div>

            </div>
        </div>
    )
}

export default Cart_Details
