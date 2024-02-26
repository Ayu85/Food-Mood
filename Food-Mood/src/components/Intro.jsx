import img1 from '../assets/image_layers_1-1.png'
import img2 from '../assets/image_layers_1-2.png'
import img3 from '../assets/image_layers_1-3.png'
import img4 from '../assets/image_layers_1-4.png'
const Intro = () => {
    return (
        <div className=' flex items-center lg:justify-between justify-center gap-10 px-32 flex-wrap lg:flex-nowrap '>
            <div className='relative mt-20'>
                <img src={img1} alt="" className='absolute ' />
                <img src={img2} alt="" className='absolute' />
                <img src={img3} alt="" className='absolute' />
                <img src={img4} alt="" className='' />
            </div>
            <div className='font-[#232323]'>
                <h1 className='font-[lateral] lg:text-3xl md:text-3xl text-2xl text-[#F7B035]'>always fresh</h1>
                <h1 className='lg:text-5xl md:text-5xl text-4xl pt-2 font-[gorg-medium] font-semibold '>From Varanasi With  </h1>
                <h1 className='lg:text-5xl md:text-5xl text-4xl font-[gorg-medium]  font-semibold '>Indian Love </h1>
                <p className='w-96 pt-4 lg:text-md md:text-md  text-slate-700'>FoodMood is an Indian chain of fast food restaurants, which has an experience of opening more than 170 restaurants in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017.</p>
                <button className='bg-[#F7B035] hover:bg-white hover:text-[#F7B035] hover:border-[#F7B035] hover:border transition-all text-white text-lg px-6 mt-5 cursor-pointer uppercase font-[head] py-3 rounded-full'>Order Now</button>
            </div>
        </div>
    )
}

export default Intro
