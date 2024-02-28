import heroBg from '../../../assets/food_bg-1.jpg'
import leaf1 from '../../../assets/leaf-1.png'
import leaf2 from '../../../assets/leaf_2.png'
import leaf3 from '../../../assets/leaf_3.png'
import mushroom from '../../../assets/mushroom.png'
import tomato from '../../../assets/tomato_2.png'
import points from '../../../assets/points_2.png'
import points2 from '../../../assets/points.png'
const Pizza = () => {
    return (
        <div className='relative flex items-center justify-center lg:h-[100vh] bg-black md:h-[60vh] h-[40vh] overflow-hidden'>
            <img src={heroBg} alt="" className='h-full w-full absolute' />
            <img src={leaf1} alt="" className='right-44 top-20 absolute rotator' />
            <img src={mushroom} alt="" className='left-20 top-24 absolute rotator' />
            <img src={leaf2} alt="" className='right-20 top-[500px] absolute rotator hidden lg:block' />
            <img src={leaf3} alt="" className='left-10 top-96 absolute rotator hidden lg:block' />
            <img src={tomato} alt="" className='right-[260px] top-[250px] absolute rotator hidden lg:block' />
            <img src={points} alt="" className='left-0 top-52 absolute hidden lg:block' />
            <img src={points2} alt="" className='left-[500px] top-52 absolute hidden lg:block ' />
            <div className='absolute font-[head] text-[#323437]  lg:text-9xl md:text-8xl text-5xl'>
                <h1>PIZZA</h1>
            </div>
        </div>
    )
}

export default Pizza
