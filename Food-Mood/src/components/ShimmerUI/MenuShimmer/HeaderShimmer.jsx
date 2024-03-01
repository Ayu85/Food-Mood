const HeaderShimmer = () => {
  return (
    <div>
        <div className="flex justify-between gap-96  px-5 py-5 mt-32 items-start border border-slate-400 rounded-l">
            <div className='flex flex-col text-sm font-[gorg-medium]  '>
                <span className='text-xl font-bold'></span>
                <span className='text-slate-500'></span>
                <span className='text-slate-500'></span>
                <span className='text-slate-500 flex items-center gap-1 pt-2'>
                   </span>
                <span className=' text-lg flex gap-3 mt-4 text-[#3E4152] font-black'>
                    <span className='flex items-center gap-1'>
                    </span>
                  
                </span>
                <span className='flex mt-5  rounded-xl flex-col  text-sm font-semibold justify-center items-center w-24 py-2 border border-slate-500'>
                    <h1 className='flex items-center gap-1 text-[#008000] '></h1>
                    <h1 className='border-t border-slate-500'></h1>
                </span>
            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>

            </div>

        </div>
    </div>
  )
}

export default HeaderShimmer
