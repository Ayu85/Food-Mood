import logo from '../assets/logo_homepage1.png'
import { TiShoppingCart } from "react-icons/ti";
import { BiSolidOffer } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCallSplit } from "react-icons/md";
import useScroll from '../hooks/useScroll';

const Navbar = () => {
    const isScrolled = useScroll()
    return (
        <div className={`flex ${isScrolled && "bg-[#ffffff9f] backdrop-blur-md"}  transition-all duration-75 justify-between py-2 fixed top-0 z-[9999] w-full items-center bg-[#ffffff00] px-10 font-[gorg-medium] font-medium  text-lg`}>
            <img src={logo} className='w-28' alt="logo" />
            <ul className=' items-center  gap-3 hidden lg:flex'>
                <li className='flex items-center gap-2 cursor-pointer hover:bg-[#F4BD59] px-4 transition-all py-1 rounded-full'><BiSolidOffer className='text-2xl' />Offers</li>
                <li className='flex items-center gap-2 cursor-pointer  hover:bg-[#F4BD59] px-4 transition-all py-1 rounded-full'><BiHelpCircle className='text-2xl' />Help</li>
                <li className='flex items-center gap-2 cursor-pointer  hover:bg-[#F4BD59] px-4 transition-all py-1 rounded-full'><FaRegUserCircle className='text-xl' />Sign in</li>
                <li className='flex items-center gap-2 cursor-pointer  hover:bg-[#F4BD59] px-4 transition-all py-1 rounded-full'><MdCallSplit className='text-2xl' />Contact</li>
            </ul>
            <div className=' gap-2 hidden lg:flex  items-center'>
                <TiShoppingCart className='text-2xl' />
                <button>Support</button>
            </div>
        </div>
    )
}

export default Navbar
