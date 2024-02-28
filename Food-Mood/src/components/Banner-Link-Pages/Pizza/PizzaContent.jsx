import { useSelector } from 'react-redux'
import Rest_Card from '../../Restautants/Rest_Card'
const PizzaContent = () => {
    const pizzaData = useSelector(store => store.pizza_data.filteredData)
    return (
        <div className='flex items-center justify-center flex-wrap gap-8'>
            {
                pizzaData?.map((rest,key) => {
                    return <Rest_Card {...rest?.card?.card?.info} key={key} />
                })
            }
        </div>
    )
}

export default PizzaContent
