import heroBg from '../../../assets/food_bg-1.jpg'
import leaf2 from '../../../assets/leaf_2.png'
import leaf3 from '../../../assets/leaf_3.png'
import mushroom from '../../../assets/mushroom.png'
import tomato from '../../../assets/tomato_2.png'
import points from '../../../assets/points_2.png'
import points2 from '../../../assets/points.png'
import p1 from '../../../assets/pizza/p1.png'
import p2 from '../../../assets/pizza/p2.png'
import p3 from '../../../assets/pizza/p3.png'
const Pizza = () => {
    return (
        <div className='relative flex items-center justify-center lg:h-[100vh] bg-black md:h-[60vh] h-[40vh] overflow-hidden'>
            <img src={heroBg} alt="" className='h-full w-full absolute' />
            <img src={p2} alt="" className='right-44 top-20 absolute w-44 ' />
            <img src={p1} alt="" className='left-20 top-24 absolute w-72' />
            <img src={p3} alt="" className='right-20 w-80 top-[400px] absolute  hidden lg:block' />
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
