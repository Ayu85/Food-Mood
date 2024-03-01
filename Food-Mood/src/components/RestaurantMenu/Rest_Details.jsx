import { useSelector } from 'react-redux'
import { IMAGE_API } from '../../constants'
import { FaStar } from "react-icons/fa6";

const Rest_Details = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    console.log(restaurantDetails);
    return (
        <div className="">
            <div>
                <img src={IMAGE_API + restaurantDetails?.cloudinaryImageId} className='w-96' alt="" />
                <span className='flex flex-col  text-lg font-semibold justify-center items-center w-32 py-2 border border-slate-500'>
                    <h1 className='flex items-center gap-1 text-[#008000] '><span><FaStar /></span><span>{restaurantDetails?.avgRatingString}</span></h1>
                    <h1 className='border-t border-slate-500'>{restaurantDetails?.totalRatingsString}</h1>
                </span>
            </div>
            <div></div>
        </div>
    )
}

export default Rest_Details
