import axios from '../../axios'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import { getCartTotal } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import './Payment.css'

const Payment = () => {

  const navigate = useNavigate()

  const [{ cart, user }, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // generate Stripe client secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits (its in cents (dollars), so '* 100')
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [cart])

  const handleSubmit = async (event) => {
    event.preventDefault()
    // to click 'buy now' btn only once
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          })

        setSucceeded(true)
        setError(null)
        setProcessing(false)

        dispatch({
          type: 'emptyCart'
        })

        // after purchasing, customer cannot go back to payment pg 
        navigate('/orders', { replace: true })
      })
  }

  // listen for changes in the CardElement
  const handleChange = e => {    
    // display any errors as customer types their card details
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="paymentPriceCont">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment