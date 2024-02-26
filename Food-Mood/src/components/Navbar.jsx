import logo from '../assets/logo_homepage1.png'
import { TiShoppingCart } from "react-icons/ti";
import { BiSolidOffer } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCallSplit } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='flex justify-between py-3 items-center px-10 font-[gorg-medium] font-medium  text-lg'>
            <img src={logo} className='w-32' alt="logo" />
            <ul className='flex items-center  gap-5'>
                <li className='flex items-center gap-2'><BiSolidOffer className='text-2xl' />Offers</li>
                <li className='flex items-center gap-2'><BiHelpCircle className='text-2xl' />Help</li>
                <li className='flex items-center gap-2'><FaRegUserCircle className='text-xl' />Sign in</li>
                <li className='flex items-center gap-2'><MdCallSplit className='text-2xl' />Contact</li>
            </ul>
            <div className='flex gap-2  items-center'>
                <TiShoppingCart />
                <button>Support</button>
            </div>
        </div>
    )
}

export default Navbar
