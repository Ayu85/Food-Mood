import { useDispatch } from 'react-redux'
import { toogleNav } from "../redux/slices/NavScrolled"
const useScroll = () => {
    const dispatch = useDispatch()
    window.addEventListener('scroll', () => {
        if (scrollY > 50)
            dispatch(toogleNav())
        console.log(scrollY);
    })

}

export default useScroll
