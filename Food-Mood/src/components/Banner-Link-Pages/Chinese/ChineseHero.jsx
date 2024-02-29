import heroBg from '../../../assets/food_bg-1.jpg'
import points from '../../../assets/points_2.png'
import points2 from '../../../assets/points.png'
import { easeIn, motion } from 'framer-motion'
const ChineseHero = () => {
    return (
        <div>
            <div className='relative flex items-center justify-center lg:h-[100vh] bg-black md:h-[60vh] h-[40vh] overflow-hidden'>
                <img src={heroBg} alt="" className='h-full w-full absolute' />
                <img src={p2} alt="" className='right-44 top-20 absolute w-44  hidden lg:block' />
                <img src={p1} alt="" className='left-20 top-72 absolute w-72  hidden lg:block' />
                <img src={p3} alt="" className='right-20 w-80 top-[400px] absolute  hidden lg:block' />
                <img src={points} alt="" className='left-0 top-52 absolute ' />
                <img src={points2} alt="" className='left-[500px] top-52 absolute  ' />
                <div className='absolute flex gap-5 flex-col items-center justify-center font-[head] text-[#323437]  '>
                    <motion.h1 initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: easeIn }}
                        className='lg:text-8xl md:text-7xl text-5xl'>PIZZA</motion.h1>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: easeIn, delay: 0.5 }}
                        className='text-xl lg:text-2xl text-center text-[#535355] '>Cheesilicious pizzas to make every day extraordinary.</motion.p>
                </div>
            </div>
        </div>
    )
}

export default ChineseHero
