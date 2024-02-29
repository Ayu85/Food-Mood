import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFilteredMenu, addFullMenu } from "../redux/slices/Menu"

const useMenuAPI = (id) => {
    const dispatch = useDispatch()
    const fullMenu = useSelector(store => store.menu.value)
    useEffect(() => {
        const getRestMenu = async () => {
            const raw = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467126&lng=80.9460872&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await raw.json();
            dispatch(addFullMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards))
        }
        getRestMenu()
    }, [])
    const getFilteredMenu = () => {
        return fullMenu?.filter((men) => {
            return 'itemCards' in men.card.card
        })
    }
    setTimeout(() => {
        const d = getFilteredMenu();
        console.log(d);
        dispatch(addFilteredMenu(d))
    }, 1000)
}

export default useMenuAPI
