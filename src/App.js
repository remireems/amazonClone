import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SignIn from './components/SignIn/SignIn';
import { useEffect } from 'react';
import { auth } from './firebase';

const App = () => {

  useEffect(() => {
    // will only run once when the app component loads (its like if statement in react)

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>', authUser)
      
      if (authUser) {
        // the user just logged in / the user was logged in
      } else {
        // the user is logged out
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
        </Routes>
      </div>
    </Router>

  );
}

export default App
