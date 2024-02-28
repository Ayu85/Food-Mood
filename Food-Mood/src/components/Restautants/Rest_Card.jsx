/* eslint react/prop-types: 0 */
import { FcRating } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { IMAGE_API } from "../../constants";

const Rest_Card = ({ name, cloudinaryImageId, locality, avgRatingString, sla }) => {
    return (
        < div className="flex cursor-pointer hover:scale-95 transition-all  font-[gorg-regular] flex-col w-72 h-64 px-2 py-2  text-black" >
            <img src={IMAGE_API + cloudinaryImageId} className="w-72 h-44 rounded-2xl" alt="" />
            <div className="pl-2">
                <h1 className="text-lg pt-1 tracking-wide  font-semibold text-[#414449] line-clamp-1">{name}</h1>
                <span className="flex gap-2">
                    <h1 className="flex items-center gap-1 text-md font-semibold text-[#414449]">
                        <FcRating className="text-xl" />
                        {avgRatingString}</h1>
                    <h1 className="flex items-center  text-md font-semibold text-[#414449]">
                        
                        {sla?.slaString}</h1>
                </span>
                <h1 className="flex items-center  tracking-wide text-md font-semibold text-[#414449]"><CiLocationOn />
                    {locality}</h1>
            </div>
        </div >
    )
}

export default Rest_Card
