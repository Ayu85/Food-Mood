import { useEffect } from "react"
import { MENU_API } from "../constants"

const useMenuAPI = () => {
  useEffect(()=>{
    const getRestMenu=async()=>{
        const raw=await fetch(MENU_API);
        const json=await raw.json();
        console.log(json);
    }
  },[])
}

export default useMenuAPI
