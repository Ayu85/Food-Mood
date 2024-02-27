import heroBg from '../../assets/food_bg-1.jpg'
import deliveryBoy from '../../assets/deliveryboy.png'
const Res_Hero = () => {
    return (
        <div className='relative'>
            <img src={heroBg} alt="" className=' absolute' />
            <img src={deliveryBoy} alt="" className=' absolute top-72 w-96 right-0' />

        </div>
    )
}

export default Res_Hero
