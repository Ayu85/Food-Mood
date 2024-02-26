import heroBg from '../assets/food_bg-1.jpg'
import burgerLogo from '../assets/burger-1.png'
const Hero = () => {
    return (
        <div className="h-[140vh] relative">
            <img src={heroBg} alt="" className='h-full absolute' />
            <div className='absolute h-full w-full flex justify-center items-center'>
                <div>
                    <img src={burgerLogo} alt="logo" className='w-[500px]'/>
                </div>
                <div>
                    
                </div>
            </div>

        </div>
    )
}

export default Hero
