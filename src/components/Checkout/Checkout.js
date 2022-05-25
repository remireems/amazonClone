import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkoutLeft">
        <img className='checkoutAd' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

        <div>
          <h2 className="checkoutTitle">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkoutRight">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout