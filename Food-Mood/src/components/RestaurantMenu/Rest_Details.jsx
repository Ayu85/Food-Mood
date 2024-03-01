import { useSelector } from 'react-redux'
import { IMAGE_API } from '../../constants'
const Rest_Details = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    console.log(restaurantDetails);
    return (
        <div className="">
            <div>
                <img src={IMAGE_API + restaurantDetails?.cloudinaryImageId} className='w-96' alt="" />
            </div>
            <div></div>
        </div>
    )
}

export default Rest_Details
