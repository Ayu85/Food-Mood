import { useSelector } from 'react-redux'
import Rest_Card from '../../Restautants/Rest_Card'
import Shimmer from '../../ShimmerUI/Shimmer'
const PizzaContent = () => {
    const pizzaData = useSelector(store => store.pizza_data.filteredData)

    return pizzaData.length === 0 ? <Shimmer /> : (
        <div className='flex items-center justify-center flex-wrap gap-8 mt-10'>
            {
                pizzaData?.map((rest, key) => {
                    return <Rest_Card {...rest?.card?.card?.info} key={key} />
                })
            }
        </div>
    )
}

export default PizzaContent
