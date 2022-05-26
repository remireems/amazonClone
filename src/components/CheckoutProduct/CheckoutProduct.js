import { useStateValue } from '../../StateProvider'
import './CheckoutProduct.css'

const CheckoutProduct = ({id, image, title, price, rating}) => {

  const [{ cart }, dispatch] = useStateValue()
  // remove items from cart
  const removeFromCart = () => {
    dispatch({
      type: 'removeItem',
      id: id
    })
  }

  return (
    <div className="checkoutProduct">
      <img className='checkoutProductImg' src={image} alt="" />

      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProductRating">
          {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>

    </div>
  )
}

export default CheckoutProduct