import logo from '../assets/logo_homepage1.png'
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
    return (
        <div className='flex justify-between py-3 items-center px-10'>
            <img src={logo} className='w-32' alt="logo" />
            <ul className='flex items-center font-[Navbar] font-extrabold text-lg  gap-5'>
                <li>Offers</li>
                <li>Help</li>
                <li>Sign in</li>
                <li>Cart</li>
            </ul>
            <div className='flex items-center'>
                <TiShoppingCart />
                <button>Support</button>
            </div>
        </div>
    )
}

export default Navbar
