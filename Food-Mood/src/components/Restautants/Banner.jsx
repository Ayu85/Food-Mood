import { burgerLink, chineseLink } from '../../constants'
import { pizzaLink } from '../../constants'
import { biryaniLink } from '../../constants'
import { northIndianLink } from '../../constants'
import { rollLink } from '../../constants'
import { choleBhatureLink } from '../../constants'
const Banner = () => {
    return (
        <div>
            <img src={burgerLink} alt="" />
            <img src={pizzaLink} alt="" />
            <img src={chineseLink} alt="" />
            <img src={biryaniLink} alt="" />
            <img src={northIndianLink} alt="" />
            <img src={choleBhatureLink} alt="" />
            <img src={rollLink} alt="" />
        </div>
    )
}

export default Banner
