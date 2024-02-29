import { useSelector } from 'react-redux'
const useChineseAPI = () => {
    const chineseRest = useSelector(store => store.chinese_data.value)
}

export default useChineseAPI
