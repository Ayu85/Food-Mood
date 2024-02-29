import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CHINESE_API } from '../constants'
const useChineseAPI = () => {
    const chineseRest = useSelector(store => store.chinese_data.value)
    useEffect(() => {
        const getChineseData = async () => {
            const raw = await fetch(CHINESE_API)
            const json = await raw.json()
            console.log(json);
        }
        getChineseData()
    }, [])
}

export default useChineseAPI
