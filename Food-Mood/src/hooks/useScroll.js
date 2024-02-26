import { useState } from "react"

const useScroll = () => {
    const [isScrolled, setScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        if (scrollY > 50)
            setScrolled(true)
        else
            setScrolled(false)
    })

    return isScrolled;
}

export default useScroll
