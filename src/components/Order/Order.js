import moment from 'moment'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import './Order.css'

const Order = ({ order }) => {
  return (
    <div className="order">

      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

      <p className='orderId'>
        <small>{order.id}</small>
      </p>

      {order.data.cart?.map(item => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className='orderTotal'>Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

    </div>
  )
}

export default Order