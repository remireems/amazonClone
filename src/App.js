import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SignIn from './components/SignIn/SignIn';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise = loadStripe('pk_test_51L5HH6DJT4I0sNbuR7Yw4aCSMpd7MOTmBUByatXKE1GFN1wOMGNWXTLYxmKuosZYIbJMpWTVEas8fALr0JFAfxsD00d6Nn8RBt')

const App = () => {

  const [{}, dispatch] = useStateValue()

  // create a listener
  useEffect(() => {
    // will only run once when the app component loads (its like if statement in react)

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>', authUser)
      
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'setUser',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'setUser',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/' element={<><Navbar /><Home /></>} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/checkout' element={<><Navbar /><Checkout /></>} />
          <Route path='/payment' element={<><Navbar /><Elements stripe={promise}><Payment /></Elements></>} />
          <Route path='/orders' element={<><Navbar /><Orders /></>} />
        </Routes>
        
      </div>
    </Router>

  );
}

export default App
