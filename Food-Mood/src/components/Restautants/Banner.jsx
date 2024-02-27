import { burgerLink, chineseLink } from '../../constants'
import { pizzaLink } from '../../constants'
import { biryaniLink } from '../../constants'
import { northIndianLink } from '../../constants'
import { rollLink } from '../../constants'
import { choleBhatureLink } from '../../constants'
const Banner = () => {
    return (
        <div className='flex overflow-y-hidden w-full'>
            
            <img src={burgerLink} alt="" className='w-60 h-60' />
            <img src={pizzaLink} alt="" className='w-60 h-60' />
            <img src={chineseLink} alt="" className='w-60 h-60' />
            <img src={biryaniLink} alt="" className='w-60 h-60' />
            <img src={northIndianLink} alt="" className='w-60 h-60' />
            <img src={choleBhatureLink} alt="" className='w-60 h-60' />
            <img src={rollLink} alt=""  className='w-60 h-60' />
        </div>
    )
}

export default Banner
