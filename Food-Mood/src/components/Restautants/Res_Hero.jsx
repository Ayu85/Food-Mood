import heroBg from '../../assets/food_bg-1.jpg'
import deliveryBoy from '../../assets/deliveryboy.png'
import { motion } from 'framer-motion'
const Res_Hero = () => {
    return (
        <div className='relative'>
            <img src={heroBg} alt="" className=' absolute' />
            <motion.div initial={{ right: 0 }} animate={{ translateX: -1600 }}
                transition={{ duration: 8, ease: 'linear', repeat: Infinity }} >
                <img src={deliveryBoy} alt="" className=' absolute top-72 w-96 right-0' />
            </motion.div>
        </div>
    )
}

export default Res_Hero
