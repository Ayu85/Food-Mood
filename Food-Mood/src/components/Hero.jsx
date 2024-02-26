import heroBg from '../assets/food_bg-1.jpg'
import burgerLogo from '../assets/burger-1.png'
import leaf1 from '../assets/leaf-1.png'
import leaf2 from '../assets/leaf_2.png'
import leaf3 from '../assets/leaf_3.png'
import mushroom from '../assets/mushroom.png'
import tomato from '../assets/tomato_2.png'
import points from '../assets/points_2.png'
import points2 from '../assets/points.png'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div className="h-[140vh] relative">
            <img src={heroBg} alt="" className='h-full absolute' />
            <img src={leaf1} alt="" className='right-44 top-20 absolute rotator' />
            <img src={mushroom} alt="" className='left-20 top-24 absolute rotator' />
            <img src={leaf2} alt="" className='right-20 top-[500px] absolute rotator' />
            <img src={leaf3} alt="" className='left-10 top-96 absolute rotator' />
            <img src={tomato} alt="" className='left-[650px] top-[550px] absolute rotator' />
            <img src={points} alt="" className='left-0 top-52 absolute ' />
            <img src={points2} alt="" className='left-[500px] top-52 absolute ' />
            <div className='absolute h-full w-full flex justify-center gap-32 items-start mt-32'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }}
                    transition={{ duration: 1, ease: 'easeIn', delay: 0.2 }}>
                    <img src={burgerLogo} alt="logo" className='w-[500px] trans hidden lg:block' />
                </motion.div>
                <div className='text-white mt-52'>
                    <h1 className='text-7xl font-[nova]  font-bold '>Delivering </h1>
                    <h1 className='text-7xl font-[boldest]  font-bold '>happiness</h1>
                </div>
            </div>

        </div>
    )
}

export default Hero
