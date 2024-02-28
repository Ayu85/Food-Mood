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
        <div className='relative lg:h-[100vh] bg-black md:h-[60vh] h-[40vh] overflow-hidden'>
            <img src={heroBg} alt="" className='h-full w-full absolute' />
            <img src={leaf1} alt="" className='right-44 top-20 absolute rotator' />
            <img src={mushroom} alt="" className='left-20 top-24 absolute rotator' />
            <img src={leaf2} alt="" className='right-20 top-[500px] absolute rotator hidden lg:block' />
            <img src={leaf3} alt="" className='left-10 top-96 absolute rotator hidden lg:block' />
            <img src={tomato} alt="" className='right-[260px] top-[250px] absolute rotator hidden lg:block' />
            <img src={points} alt="" className='left-0 top-52 absolute hidden lg:block' />
            <img src={points2} alt="" className='left-[500px] top-52 absolute hidden lg:block ' />
            <motion.div  animate={{ translateX: -1900 }}
                transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }} >
                <img src={deliveryBoy} alt="" className='absolute lg:top-72 lg:w-96 md:top-32 md:w-64 top-24 w-44 -right-96' />
            </motion.div>
        </div>
    )
}

export default Res_Hero
