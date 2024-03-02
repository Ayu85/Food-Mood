import { useSelector } from "react-redux"
import { BiSolidOffer } from "react-icons/bi";
import BannerShimmer from "../ShimmerUI/MenuShimmer/BannerShimmer";
import { useEffect, useState } from "react";
const OffersBanner = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)
    const [showData, setShowData] = useState(false)
    // console.log(restaurantDetails);
    useEffect(() => {
        setTimeout(() => {
            setShowData(true)
        }, 4000);
    }, [])
    return !showData ? < BannerShimmer /> : (
        <div className="flex mt-6 lg:gap-8 md:gap-8 gap-3  ">
            <div>
                <h1 className="w-52 h-16 flex items-center 
                text-md font-semibold border border-slate-300
                 px-3 py-2 text-center">
                    <BiSolidOffer className="text-4xl text-[#865649]" />
                    {restaurantDetails?.aggregatedDiscountInfoV2?.descriptionList[0]?.meta}</h1>
            </div>
            <div>
                <h1 className="w-60  h-16   flex items-center  text-md font-semibold border border-slate-300 
                px-2 py-2 text-center">  <BiSolidOffer className="text-5xl text-[#865649]" />
                    {restaurantDetails?.aggregatedDiscountInfoV2?.descriptionList[1]?.meta}</h1>
            </div>
        </div>
    )
}

export default OffersBanner
