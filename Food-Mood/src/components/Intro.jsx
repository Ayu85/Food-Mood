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
            <div>
                <h1>always fresh</h1>
                <h1>From Varanasi With  </h1>
                <h1>Indian Love </h1>
            </div>
        </div>
    )
}

export default Intro
