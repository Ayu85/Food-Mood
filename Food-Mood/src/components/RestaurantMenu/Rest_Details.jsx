import { useSelector } from 'react-redux'
import { IMAGE_API } from '../../constants'
import { FaStar } from "react-icons/fa6";

const Rest_Details = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    console.log(restaurantDetails);
    return (
        <div className="flex justify-between w-[70%] ">
            <div className='flex flex-col gap-3 items-center justify-center'>
                <img src={IMAGE_API + restaurantDetails?.cloudinaryImageId} className='rounded-2xl w-96 aspect-square' alt="" />
                <span className='flex rounded-2xl flex-col  text-lg font-semibold justify-center items-center w-32 py-2 border border-slate-500'>
                    <h1 className='flex items-center gap-1 text-[#008000] '><span><FaStar /></span><span>{restaurantDetails?.avgRatingString}</span></h1>
                    <h1 className='border-t border-slate-500'>{restaurantDetails?.totalRatingsString}</h1>
                </span>
            </div>
            <div className='flex flex-col text-lg font-[gorg-medium] '>
                <span className='text-2xl font-bold'>{restaurantDetails?.name}</span>
                <span className='text-slate-500'>{restaurantDetails?.cuisines?.join(",")}</span>
                <span className='text-slate-500'>{restaurantDetails?.areaName}</span>
            </div>
        </div>
    )
}

export default Rest_Details
