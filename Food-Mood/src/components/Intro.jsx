import img1 from '../assets/image_layers_1-1.png'
import img2 from '../assets/image_layers_1-2.png'
import img3 from '../assets/image_layers_1-3.png'
import img4 from '../assets/image_layers_1-4.png'
const Intro = () => {
    return (
        <div>
            <div className='relative'>
                <img src={img1} alt="" className='absolute' />
                <img src={img2} alt="" className='absolute' />
                <img src={img3} alt="" className='absolute' />
                <img src={img4} alt="" className='absolute' />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Intro
