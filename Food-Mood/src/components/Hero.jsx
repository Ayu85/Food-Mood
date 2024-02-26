import heroBg from '../assets/food_bg-1.jpg'
import burgerLogo from '../assets/burger-1.png'
const Hero = () => {
    return (
        <div className="h-[140vh] relative">
            <img src={heroBg} alt="" className='h-full absolute' />
            <div className='absolute h-full w-full flex justify-center gap-44 items-start mt-32'>
                <div>
                    <img src={burgerLogo} alt="logo" className='w-[500px]' />
                </div>
                <div className='text-white mt-52'>
                    <h1 className='text-5xl font-[nova]  font-bold '>Delivering </h1>
                    <h1 className='text-5xl font-[boldest]  font-bold '>happiness</h1>

                </div>
            </div>

        </div>
    )
}

export default Hero
