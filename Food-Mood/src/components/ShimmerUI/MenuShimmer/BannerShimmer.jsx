
const BannerShimmer = () => {
    return (
        <div>
            <div className="flex mt-6 lg:gap-8 md:gap-8 gap-3  ">
                <div>
                    <h1 className="w-52 animate-[pulse_0.5s_infinite] h-16 bg-slate-400 border border-slate-500 flex items-center 
                text-md font-semibold 
                 px-3 py-2 text-center">

                    </h1>
                </div>
                <div>
                    <h1 className="w-60  h-16  animate-[pulse_0.5s_infinite]  bg-slate-400 border border-slate-500   flex items-center  text-md font-semibold  
                px-2 py-2 text-center">
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default BannerShimmer
