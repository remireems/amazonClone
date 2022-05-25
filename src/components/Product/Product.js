import { useStateValue } from '../../StateProvider'
import './Product.css'

const Product = ({ id, title, price, image, rating }) => {

  const [{ cart }, dispatch] = useStateValue()
  console.log('this is the cart >>', cart)
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
          {Array(rating).fill().map((_, i) => (<p>🌟</p>))}

        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToCart}>Add to Cart</button>

    </div>
  )
}

export default Product