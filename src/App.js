import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SignIn from './components/SignIn/SignIn';

function App() {
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
