import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import { Search, ShoppingCart, MenuOutlined } from '@mui/icons-material'
import './Navbar.css'

const Navbar = () => {

  const [{ cart, user }, dispatch] = useStateValue()

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className='navbar'>
      <div className='navbarTop'>
        <Link to='/'>
          <img className='navLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo" />
        </Link>
        <div className="navSearch">
          <input
            type="text"
            className='navSearchInput'
          />
          <Search className='searchIcon' />
        </div>

        <div className="navTabs">
          <Link to={!user && '/signin'} style={{ textDecoration: 'none' }}>
            <div onClick={handleAuth} className="navTab">
              <span className='navTabLnOne'>Hello, {!user ? 'Guest' : user.email}</span>
              <span className='navTabLnTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>

          <Link to='/orders' style={{ textDecoration: 'none' }}>
            <div className="navTab">
              <span className='navTabLnOne'>Returns</span>
              <span className='navTabLnTwo'>& Orders</span>
            </div>
          </Link>

          <div className="navTab">
            <span className='navTabLnOne'>Your</span>
            <span className='navTabLnTwo'>Prime</span>
          </div>

          <Link to='/checkout' style={{ textDecoration: 'none' }}>
            <div className="navCartIcon">
              <ShoppingCart />
              <span className='navTabLnTwo cartCounter'>{cart?.length}</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="navbarBottom">
        <div className="navbarBottomLeft">
          <MenuOutlined />
          <span>All</span>
        </div>
        <div className="navbarBottomMid">
          <p>Best Sellers</p>
          <p>Amazon Basics</p>
          <p>Customer Service</p>
          <p>New Releases</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Gift Cards</p>
        </div>
        <div className="navbarBottomRight">
          <span>All-new Fire 7 Kids tablet</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar