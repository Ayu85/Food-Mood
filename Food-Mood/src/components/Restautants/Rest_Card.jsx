/* eslint react/prop-types: 0 */
import { useSelector } from "react-redux"
import { FcRating } from "react-icons/fc";
import { IoIosTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IMAGE_API } from "../../constants";

const Rest_Card = ({ name, cloudinaryImageId, locality, avgRatingString, sla, areaName }) => {
    const filteredRest = useSelector(store => store.restaurants.filteredRest)
    console.log(filteredRest);
    return (
        < div className="flex font-[gorg-regular] flex-col w-72 h-64 px-2 py-2  text-black" >
            <img src={IMAGE_API + cloudinaryImageId} className="w-72 h-44 rounded-2xl" alt="" />
            <div className="pl-2">
                <h1 className="text-xl tracking-wide  font-semibold text-[#414449] line-clamp-1">{name}</h1>
                <span className="flex gap-2">
                    <h1 className="flex items-center gap-1 text-md font-semibold text-[#414449]">
                        <FcRating className="text-xl" />
                        {avgRatingString}</h1>
                    <h1 className="flex items-center  text-md font-semibold text-[#414449]">
                        <IoIosTime className="text-xl" />
                        {sla?.slaString}</h1>
                </span>
                <h1 className="flex items-center  text-md font-semibold text-[#414449]"><CiLocationOn />
                    {locality},{areaName}</h1>
            </div>
        </div >
    )
}

export default Rest_Card
