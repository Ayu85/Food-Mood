import { useNavigate } from 'react-router-dom'
import { burgerLink, chineseLink } from '../../constants'
import { pizzaLink } from '../../constants'
import { biryaniLink } from '../../constants'
import { northIndianLink } from '../../constants'
import { rollLink } from '../../constants'
import { choleBhatureLink } from '../../constants'
import 'pure-react-carousel/dist/react-carousel.es.css';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col mt-10  justify-center items-center gap-3   '>
            <div>
                <h1 className='text-2xl font-semibold font-[gorg-medium] border-b border-b-yellow-500'>Choose from your favourites</h1>
            </div>
            <div className='flex justify-center items-center'>
                {/* <div ><GrPrevious
                    className='text-5xl cursor-pointer' />
                </div> */}
                <div id='banner' className='  flex  flex-wrap overflow-hidden justify-center gap-5 py-5 items-center '>
                    <img src={burgerLink} alt="" className='lg:w-36 lg:h-44 md:w-40 md:h-48 h-40 w-32 cursor-pointer hover:scale-110 transition-all ' />
                    <img src={pizzaLink} onClick={() => navigate('/restaurants/pizza')} alt="" className='lg:w-36 lg:h-44 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={chineseLink} alt="" className='lg:w-36 lg:h-44 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={biryaniLink} alt="" className='lg:w-36 lg:h-44 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={northIndianLink} alt="" className='lg:w-36 lg:h-44 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                    <img src={choleBhatureLink} alt="" className='lg:w-36 lg:h-44 md:w-40 md:h-48 h-40 w-32 cursor-pointer hover:scale-110 transition-all' />
                    <img src={rollLink} alt="" className='lg:w-36 lg:h-44 md:w-40 md:h-48 h-40 w-32 cursor-pointer  hover:scale-110 transition-all' />
                </div>
                {/* <div><GrNext
                    className='text-5xl cursor-pointer' />
                </div> */}
            </div>
        </div>
    )
}

export default Banner
