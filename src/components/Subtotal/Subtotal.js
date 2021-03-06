import { getCartTotal } from '../../reducer'
import { useNavigate } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider'
import './Subtotal.css'

const Subtotal = () => {

  const navigate = useNavigate()

  const [{ cart, user }, dispatch] = useStateValue()
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotalGift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      {!user ? <button>Sign in to Proceed to Checkout</button> : <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>}      
    </div>
  )
}

export default Subtotal