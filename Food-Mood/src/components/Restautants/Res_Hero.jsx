import heroBg from '../../assets/food_bg-1.jpg'
import deliveryBoy from '../../assets/deliveryboy.png'
import { motion } from 'framer-motion'
import leaf1 from '../../assets/leaf-1.png'
import leaf2 from '../../assets/leaf_2.png'
import leaf3 from '../../assets/leaf_3.png'
import mushroom from '../../assets/mushroom.png'
import tomato from '../../assets/tomato_2.png'
import points from '../../assets/points_2.png'
import points2 from '../../assets/points.png'
const Res_Hero = () => {
    return (
        <div className='relative'>
            <img src={heroBg} alt="" className=' absolute' />
            <img src={leaf1} alt="" className='right-44 top-20 absolute rotator' />
            <img src={mushroom} alt="" className='left-20 top-24 absolute rotator' />
            <img src={leaf2} alt="" className='right-20 top-[500px] absolute rotator' />
            <img src={leaf3} alt="" className='left-10 top-96 absolute rotator' />
            <img src={tomato} alt="" className='right-[260px] top-[250px] absolute rotator' />
            <img src={points} alt="" className='left-0 top-52 absolute ' />
            <img src={points2} alt="" className='left-[500px] top-52 absolute ' />

            <motion.div initial={{ right: 0 }} animate={{ translateX: -1600 }}
                transition={{ duration: 8, ease: 'linear', repeat: Infinity }} >
                <img src={deliveryBoy} alt="" className=' absolute top-72 w-96 right-0' />
            </motion.div>
        </div>
    )
}

export default Res_Hero
