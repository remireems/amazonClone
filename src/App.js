import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App
