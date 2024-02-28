import { useSelector } from "react-redux"
import { FcRating } from "react-icons/fc";
import { IoIosTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const Rest_Card = () => {
    const filteredRest = useSelector(store => store.restaurants.filteredRest)
    console.log(filteredRest);
    return (
        < div className="flex font-[gorg-regular] flex-col w-72 h-64 px-2 py-2 bg-slate-200 text-black" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrpX8Xy3C-yoDnNM3j427rdLFw4Xq1gXtNg&usqp=CAU" className="w-72" alt="" />
            <div>
                <h1 className="text-xl tracking-wide  font-semibold text-[#414449]">Maharaja</h1>
                <span className="flex gap-2">
                    <h1 className="flex items-center gap-1 text-md font-semibold text-[#414449]">
                        <FcRating className="text-xl" />
                        4.3</h1>
                    <h1 className="flex items-center  text-md font-semibold text-[#414449]">
                        <IoIosTime className="text-xl" />
                        25-30 MINS</h1>
                </span>
                <h1 className="flex items-center  text-md font-semibold text-[#414449]"><CiLocationOn />
                    Sigra</h1>
            </div>
        </div >
    )
}

export default Rest_Card
