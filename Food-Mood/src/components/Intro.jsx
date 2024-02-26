import img1 from '../assets/image_layers_1-1.png'
import img2 from '../assets/image_layers_1-2.png'
import img3 from '../assets/image_layers_1-3.png'
import img4 from '../assets/image_layers_1-4.png'
const Intro = () => {
    return (
        <div className=' flex items-center   justify-between px-44 '>
            <div className='relative mt-20'>
                <img src={img1} alt="" className='absolute' />
                <img src={img2} alt="" className='absolute' />
                <img src={img3} alt="" className='absolute' />
                <img src={img4} alt="" className='' />
            </div>
            <div className='font-[#232323]'>
                <h1 className='font-[lateral] text-3xl text-[#F7B035]'>always fresh</h1>
                <h1 className='text-5xl pt-2 font-[gorg-medium] font-semibold '>From Varanasi With  </h1>
                <h1 className='text-5xl font-[gorg-medium]  font-semibold '>Indian Love </h1>
                <p className='w-96 pt-4 text-md text-slate-700'>FoodMood is an Indian chain of fast food restaurants, which has an experience of opening more than 170 restaurants in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017.</p>
            </div>
        </div>
    )
}

export default Intro
