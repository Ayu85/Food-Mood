import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFilteredMenu, addFullMenu, addRestDetails } from "../redux/slices/Menu"
import { addRestaurant, clearCart } from "../redux/slices/CartSlice"

const useMenuAPI = (id) => {
    const dispatch = useDispatch()
    const fullMenu = useSelector(store => store.menu.value)
    useEffect(() => {
        const getRestMenu = async () => {
            const raw = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467126&lng=80.9460872&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await raw.json();
            dispatch(addFullMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards))
            dispatch(addRestDetails(json?.data?.cards[0]?.card?.card?.info))
            dispatch(addRestaurant(json?.data?.cards[0]?.card?.card?.info))
            dispatch(clearCart())
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
        dispatch(addFilteredMenu(d))
    }, 1000)
}

export default useMenuAPI
