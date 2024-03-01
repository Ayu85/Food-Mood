import { useSelector } from 'react-redux'
import { IMAGE_API } from '../../constants'
import { FaStar } from "react-icons/fa6";

const Rest_Details = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    console.log(restaurantDetails);
    return (
        <div className="flex justify-between gap-96 bg-teal-100 px-5 py-5 mt-32">
            <div className='flex flex-col gap-3 items-center justify-center'>
                <img src={IMAGE_API + restaurantDetails?.cloudinaryImageId} className='rounded-xl w-52 aspect-square' alt="" />
                <span className='flex rounded-xl flex-col  text-sm font-semibold justify-center items-center w-24 py-2 border border-slate-500'>
                    <h1 className='flex items-center gap-1 text-[#008000] '><span><FaStar /></span><span>{restaurantDetails?.avgRatingString}</span></h1>
                    <h1 className='border-t border-slate-500'>{restaurantDetails?.totalRatingsString}</h1>
                </span>
            </div>
            <div className='flex flex-col text-sm font-[gorg-medium] '>
                <span className='text-xl font-bold'>{restaurantDetails?.name}</span>
                <span className='text-slate-500'>{restaurantDetails?.cuisines?.join(",")}</span>
                <span className='text-slate-500'>{restaurantDetails?.areaName},{restaurantDetails?.sla?.lastMileTravelString}</span>
                <span className='text-slate-500'>{restaurantDetails?.feeDetails?.message}</span>
            </div>
        </div>
    )
}

export default Rest_Details
