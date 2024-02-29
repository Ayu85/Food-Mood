import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHINESE_API } from '../constants'
import { addChineseRest, addFilteredChinese } from '../redux/slices/ChineseData'
const useChineseAPI = () => {
    const chineseRest = useSelector(store => store.chinese_data.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const getChineseData = async () => {
            const raw = await fetch(CHINESE_API)
            const json = await raw.json()
            dispatch(addChineseRest(json?.data?.cards))
        }
        getChineseData()
    }, [])
    const getFilteredChineseData = (chineseRest) => {
        return chineseRest?.filter((rest) => {
            return rest?.card?.card?.widgetId == "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        })
    }
    setTimeout(() => {
        const d = getFilteredChineseData(chineseRest)
        dispatch(addFilteredChinese(d))
    }, 1000)
}

export default useChineseAPI
