import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App
