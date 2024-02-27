import { burgerLink, chineseLink } from '../../constants'
import { pizzaLink } from '../../constants'
import { biryaniLink } from '../../constants'
import { northIndianLink } from '../../constants'
import { rollLink } from '../../constants'
import { choleBhatureLink } from '../../constants'
const Banner = () => {
    return (
        <div className='flex justify-center items-center overflow-y-hidden w-full mt-20'>

            <img src={burgerLink} alt="" className='w-44 h-52 cursor-pointer hover:scale-110 transition-all ' />
            <img src={pizzaLink} alt="" className='w-44 h-52 cursor-pointer  hover:scale-110 transition-all' />
            <img src={chineseLink} alt="" className='w-44 h-52 cursor-pointer  hover:scale-110 transition-all' />
            <img src={biryaniLink} alt="" className='w-44 h-52 cursor-pointer  hover:scale-110 transition-all' />
            <img src={northIndianLink} alt="" className='w-44 h-52 cursor-pointer  hover:scale-110 transition-all' />
            <img src={choleBhatureLink} alt="" className='w-44 h-52 cursor-pointer hover:scale-110 transition-all' />
            <img src={rollLink} alt="" className='w-44 h-52 cursor-pointer  hover:scale-110 transition-all' />
        </div>
    )
}

export default Banner
