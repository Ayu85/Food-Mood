import heroBg from '../../../assets/food_bg-1.jpg'

const Pizza = () => {
    return (
        <div className='h-[110vh] flex justify-center items-center relative '>
            <img src={heroBg} alt="" className='absolute h-full w-full' />
            <div className='absolute'>
                <h1>PIZZA</h1>
            </div>
        </div>
    )
}

export default Pizza
