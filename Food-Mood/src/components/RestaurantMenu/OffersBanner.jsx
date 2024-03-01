import { useSelector } from "react-redux"
import { BiSolidOffer } from "react-icons/bi";

const OffersBanner = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)

    return (
        <div className="flex mt-6 gap-8  ">
            <div>
                <h1 className="w-52 flex items-center 
                text-md font-semibold border border-slate-300
                 px-3 py-2 text-center">
                    <BiSolidOffer className="text-4xl text-[#865649]" />
                    {restaurantDetails?.aggregatedDiscountInfoV2?.descriptionList[0]?.meta}</h1>
            </div>
            <div>
                <h1 className="w-60  flex items-center  text-md font-semibold border border-slate-300 
                px-2 py-2 text-center">  <BiSolidOffer className="text-5xl text-[#865649]" />
                    {restaurantDetails?.aggregatedDiscountInfoV2?.descriptionList[1]?.meta}</h1>
            </div>
        </div>
    )
}

export default OffersBanner
