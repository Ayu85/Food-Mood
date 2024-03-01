import { useSelector } from 'react-redux'
import IMAGE_API from '../../constants'
const Rest_Details = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    console.log(restaurantDetails);
    return (
        <div className="">
            <div>
                <img src="" alt="" />
            </div>
            <div></div>
        </div>
    )
}

export default Rest_Details
