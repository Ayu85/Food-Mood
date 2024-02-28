import { burgerLink, chineseLink } from '../../constants'
import { pizzaLink } from '../../constants'
import { biryaniLink } from '../../constants'
import { northIndianLink } from '../../constants'
import { rollLink } from '../../constants'
import { choleBhatureLink } from '../../constants'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Banner = () => {
   
    return (
        <div className='flex flex-col mt-10  justify-center items-center gap-3   '>
            <div>
                <h1 className='text-2xl font-semibold font-[gorg-medium] border-b border-b-yellow-500'>Choose from your favourites</h1>

            </div>
            <div className='flex   justify-between items-center'>
                <div ><GrPrevious
                    onClick={() => {
                        
                    }}
                    className='text-5xl cursor-pointer' />
                </div>
                <div id='banner' className=' bg-green-500 flex w-[60%] overflow-hidden justify-center gap-5 py-5 items-center '>
                    <img src={burgerLink} alt="" className='lg:w-44 lg:h-52 md:w-40 md:h-48 h-40 w-32 cursor-pointer hover:scale-110 transition-all ' />
                    <img src={pizzaLink} alt="" className='lg:w-44 lg:h-52 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={chineseLink} alt="" className='lg:w-44 lg:h-52 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={biryaniLink} alt="" className='lg:w-44 lg:h-52 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={northIndianLink} alt="" className='lg:w-44 lg:h-52 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={choleBhatureLink} alt="" className='lg:w-44 lg:h-52 md:w-40 md:h-48 h-40 w-32 cursor-pointer hover:scale-110 transition-all' />
                    <img src={rollLink} alt="" className='lg:w-44 lg:h-52 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                </div>
                <div><GrNext
                    onClick={() => {
                      
                    }}
                    className='text-5xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Banner
