import { Rating } from '@mui/material'
import { useStateValue } from '../../StateProvider'
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {

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
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct