import { useSelector } from 'react-redux'
import { IMAGE_API } from '../../constants'
import { FaStar } from "react-icons/fa6";
import { PiPersonSimpleBikeLight } from "react-icons/pi";
import { IoTimerSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';
import HeaderShimmer from '../ShimmerUI/MenuShimmer/HeaderShimmer';

const Rest_Details = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    const [showData, setShowData] = useState(false)
    console.log(restaurantDetails);
    useEffect(() => {
        setTimeout(() => {
            setShowData(true)
        }, 4000);
    }, [])
    return !showData ? <HeaderShimmer /> : (
        <div className="flex justify-between lg:gap-96 md:gap-44 gap-5  px-5 py-5 mt-32 items-start border border-slate-400 rounded-l">
            <div className='flex flex-col text-sm font-[gorg-medium]  '>
                <span className='text-xl font-bold'>{restaurantDetails?.name}</span>
                <span className='text-slate-500'>{restaurantDetails?.cuisines?.join(",")}</span>
                <span className='text-slate-500'>{restaurantDetails?.areaName},{restaurantDetails?.sla?.lastMileTravelString}</span>
                <span className='text-slate-500 flex items-center gap-1 pt-2'><PiPersonSimpleBikeLight className='text-xl text-slate-600' />
                    {restaurantDetails?.feeDetails?.message}</span>
                <span className=' text-lg flex gap-3 mt-4 text-[#3E4152] font-black'>
                    <span className='flex items-center gap-1'><IoTimerSharp />
                        {restaurantDetails?.sla?.minDeliveryTime}-{restaurantDetails?.sla?.maxDeliveryTime} MINS
                    </span>
                    {restaurantDetails?.costForTwoMessage}
                </span>
                <span className='flex mt-5  rounded-xl flex-col  text-sm font-semibold justify-center items-center w-24 py-2 border border-slate-500'>
                    <h1 className='flex items-center gap-1 text-[#008000] '><span><FaStar /></span><span>{restaurantDetails?.avgRatingString}</span></h1>
                    <h1 className='border-t border-slate-500'>{restaurantDetails?.totalRatingsString}</h1>
                </span>
            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <img src={IMAGE_API + restaurantDetails?.cloudinaryImageId} className='rounded-xl w-52 aspect-square' alt="" />

            </div>

        </div>
    )
}

export default Rest_Details
