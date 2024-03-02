import { useSelector } from 'react-redux'
import Rest_Card from '../../Restautants/Rest_Card'
import Shimmer from '../../ShimmerUI/Shimmer'
import { Link } from 'react-router-dom'
const PizzaContent = () => {
    const pizzaData = useSelector(store => store.pizza_data.filteredData)

    return pizzaData.length === 0 ? <Shimmer /> : (
        <div className='flex flex-col gap-3 mt-5 justify-center items-center'>
            <div>
                <h1 className='text-2xl font-semibold font-[gorg-medium] border-b border-b-yellow-500'>Top Choices for You</h1>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-8 mt-10'>
                {
                    pizzaData?.map((rest, key) => {
                        return <Link key={key} to={`/menu/${rest?.card?.card?.info?.id}`}><Rest_Card {...rest?.card?.card?.info} /></Link>
                    })
                }
            </div>
        </div>

    )
}

export default PizzaContent
