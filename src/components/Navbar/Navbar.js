import { Search, ShoppingCart } from '@mui/icons-material'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo" />

      <div className="navSearch">
        <input
          type="text"
          className='navSearchInput'
          />
        <Search className='searchIcon'/>
      </div>

      <div className="navTabs">
        <div className="navTab">
          <span className='navTabLnOne'>Hello Guest</span>
          <span className='navTabLnTwo'>Sign In</span>
        </div>

        <div className="navTab">
          <span className='navTabLnOne'>Returns</span>
          <span className='navTabLnTwo'>& Orders</span>
        </div>

        <div className="navTab">
          <span className='navTabLnOne'>Your</span>
          <span className='navTabLnTwo'>Prime</span>
        </div>
        <div className="navCartIcon">
          <ShoppingCart />
          <span className='navTabLnTwo cartCounter'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar