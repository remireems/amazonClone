import Order from '../Order/Order'
import { db } from '../../firebase'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider'
import './Orders.css'

const Orders = () => {

  const [{ cart, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        ))
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <div className='orders'>
      <div className="ordersCont">
        <h1>Your Orders</h1>
        <div className="ordersBox">
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
      </div>

      <div className="ordersFooter">
        <Footer />
      </div>
    </div>
  )
}

export default Orders