import { useSelector } from "react-redux"

const OffersBanner = () => {
    const restaurantDetails = useSelector(store => store.menu.restDetail)

    return (
        <div>
            <div>
                <h1 className="w-52 text-md font-semibold border border-slate-300 px-5 py-2 text-center">{restaurantDetails?.aggregatedDiscountInfoV2?.descriptionList[0]?.meta}</h1>
                <h1  className="w-72 text-md font-semibold border border-slate-300 px-2 py-2 text-center">{restaurantDetails?.aggregatedDiscountInfoV2?.descriptionList[1]?.meta}</h1>
                
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default OffersBanner
