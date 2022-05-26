import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'

import './Checkout.css'

const Checkout = () => {

  const [{ cart }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className="checkoutLeft">
        <img className='checkoutAd' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

        <div>
          <h2 className="checkoutTitle">Your shopping basket</h2>
          {cart.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          

        </div>

      </div>

      <div className="checkoutRight">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout