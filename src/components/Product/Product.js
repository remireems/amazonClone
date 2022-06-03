import { Rating } from '@mui/material'
import { useStateValue } from '../../StateProvider'
import './Product.css'

const Product = ({ id, title, price, image, rating }) => {

  const [{ cart, user }, dispatch] = useStateValue()
  
  const addToCart = () => {
    dispatch({
      type: 'addItem',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating
      }
    })
  }

  return (
    <div className='product'>
      <div className="productInfo">
        <p>{title}</p>
        <p className='productPrice'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly/>
        </div>
      </div>

      <img src={image} alt={title} />

      {!user ? <button> Sign in to Add to Cart</button> : <button onClick={addToCart}>Add to Cart</button>}
    </div>
  )
}

export default Product