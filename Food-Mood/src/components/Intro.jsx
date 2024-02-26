import img1 from '../assets/image_layers_1-1.png'
import img2 from '../assets/image_layers_1-2.png'
import img3 from '../assets/image_layers_1-3.png'
import img4 from '../assets/image_layers_1-4.png'
import { motion } from 'framer-motion'
const Intro = () => {
    return (
        <div className=' flex items-center lg:justify-between justify-center gap-10 px-32 flex-wrap lg:flex-nowrap '>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{ duration: 1.1, delay: 0.5 }} className='relative mt-20 hidden md:block lg:block'>
                <img src={img1} alt="" className='absolute min-w-96 ' />
                <img src={img2} alt="" className='absolute' />
                <img src={img3} alt="" className='absolute' />
                <img src={img4} alt="" className='' />
            </motion.div>
            <div className='font-[#232323] mt-10 '>
                <motion.h1 initial={{ translateX: 400 }} whileInView={{ translateX: 0 }} transition={{ duration: 0.2, ease: 'linear' }} className='font-[lateral] lg:text-3xl md:text-3xl text-2xl text-[#F7B035]'>always fresh</motion.h1>
                <motion.h1 initial={{ translateX: 400 }} whileInView={{ translateX: 0 }} transition={{ duration: 0.2, ease: 'linear' }} className='lg:text-5xl md:text-5xl text-4xl pt-2 font-[gorg-medium] font-semibold '>From Varanasi With  </motion.h1>
                <motion.h1 initial={{ translateX: 400 }} whileInView={{ translateX: 0 }} transition={{ duration: 0.2, ease: 'linear' }} className='lg:text-5xl md:text-5xl text-4xl font-[gorg-medium]  font-semibold '>Indian Love </motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.2 }} className='w-96 pt-4 lg:text-md md:text-md  text-slate-700'>FoodMood is an Indian chain of fast food restaurants, which has an experience of opening more than 170 restaurants in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017.</motion.p>
                <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.2 }} className='bg-[#F7B035] hover:bg-white hover:text-[#F7B035] hover:border-[#F7B035] hover:border transition-all text-white text-lg px-6 mt-5 cursor-pointer uppercase font-[head] py-3 rounded-full'>Order Now</motion.button>
            </div>
        </div>
    )
}

export default Intro
