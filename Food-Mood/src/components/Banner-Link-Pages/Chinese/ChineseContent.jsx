import { useSelector } from "react-redux"
import Shimmer from "../../ShimmerUI/Shimmer"
import Rest_Card from "../../Restautants/Rest_Card"
import { Link } from 'react-router-dom'
const ChineseContent = () => {
  const chineseData = useSelector(store => store.chinese_data.filteredChinese)
  return chineseData?.length == 0 ? <Shimmer /> : (
    <div className='flex flex-col gap-3 mt-5 justify-center items-center'>
      <div>
        <h1 className='text-2xl font-semibold font-[gorg-medium] border-b border-b-yellow-500'>Top Choices for You</h1>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-8 mt-10'>
        {
          chineseData?.map((rest, key) => {
            return <Link to={`/menu/${rest?.card?.card?.info?.id} `} key={key}> <Rest_Card {...rest?.card?.card?.info} /></Link>
          })
        }
      </div>
    </div >
  )
}

export default ChineseContent
