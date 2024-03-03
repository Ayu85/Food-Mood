import { useSelector } from "react-redux"

const Cart_Details = () => {
    const cartItems = useSelector(store => store.cart.items)
    return (
        <div className="min-w-[600px] border border-zinc-600 min-h-[500px]">
            <div>

            </div>
        </div>
    )
}

export default Cart_Details
