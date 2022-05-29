import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Payment.css'

const Payment = () => {

  const [{ cart, user }, dispatch] = useStateValue()

  return (
    <div className="payment">
      <div className="paymentCont">

        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
        </h1>

        <div className="paymentSection">

          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>

        </div>

        <div className="paymentSection">

          <div className="paymentTitle">
            <h3>Review items and delivery</h3>
          </div>

          <div className="paymentItems">
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

        <div className="paymentSection">

          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>

          <div className="paymentDetails">
            {/* stripe magic will go */}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Payment