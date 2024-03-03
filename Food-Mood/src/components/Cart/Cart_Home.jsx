import Navbar from '../Navbar'
import Cart_Details from './Cart_Details'
const Cart_Home = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center'> 
                <Cart_Details />

            </div>
        </div>
    )
}

export default Cart_Home
