import heroBg from '../../../assets/food_bg-1.jpg'
import points from '../../../assets/points_2.png'
import points2 from '../../../assets/points.png'
import { easeIn, motion } from 'framer-motion'
import c1 from '../../../assets/Chinese/c1.png'
import c2 from '../../../assets/Chinese/c2.png'
import c3 from '../../../assets/Chinese/c3.png'
const ChineseHero = () => {
    return (
        <div>
            <div className='relative flex items-center justify-center lg:h-[100vh] bg-black md:h-[60vh] h-[40vh] overflow-hidden'>
                <img src={heroBg} alt="" className='h-full w-full absolute' />
                <img src={c1} alt="" className='right-44 top-20 absolute w-44  hidden lg:block' />
                <img src={c2} alt="" className='left-10 top-44 absolute w-72  hidden lg:block' />
                <img src={c3} alt="" className='right-20 w-80 top-[400px] absolute  hidden lg:block' />
                <img src={points} alt="" className='left-0 top-52 absolute ' />
                <img src={points2} alt="" className='left-[500px] top-52 absolute  ' />
                <div className='absolute flex gap-5 flex-col items-center justify-center font-[head] text-[#323437]  '>
                    <motion.h1 initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: easeIn }}
                        className='lg:text-8xl md:text-7xl text-3xl'>CHINESE</motion.h1>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: easeIn, delay: 0.5 }}
                        className='text-md lg:text-2xl text-center text-[#535355] '>Transport your taste buds to the heart of Chinese cuisine with these scrumptious dishes.</motion.p>
                </div>
            </div>
        </div>
    )
}

export default ChineseHero
