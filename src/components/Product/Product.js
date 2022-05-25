import './Product.css'

const Product = () => {
  return (
    <div className='product'>
      <div className="productInfo">
        <p>Apple</p>
        <p className='productPrice'>
          <small>$</small>
          <strong>150</strong>
        </p>
        <div className="productRating">
          <p>🌟</p>
        </div>
      </div>

      <img src="https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=" alt="" />

      <button>Add to Basket</button>

    </div>
  )
}

export default Product