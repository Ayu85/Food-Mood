import { useEffect } from "react"

const useMenuAPI = (id) => {
    useEffect(() => {
        const getRestMenu = async () => {
            const raw = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467126&lng=80.9460872&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await raw.json();
            console.log(json);
        }
        getRestMenu()
    }, [])
    const getFIlteredMenu = () => {
        return 
    }
}

export default useMenuAPI
