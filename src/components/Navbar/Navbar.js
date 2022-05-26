import { Search, ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import './Navbar.css'

const Navbar = () => {

  const [{ cart }, dispatch] = useStateValue()

  return (
    <div className='navbar'>

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

        <Link to='/signin'>
          <div className="navTab">
            <span className='navTabLnOne'>Hello Guest</span>
            <span className='navTabLnTwo'>Sign In</span>
          </div>
        </Link>


        <div className="navTab">
          <span className='navTabLnOne'>Returns</span>
          <span className='navTabLnTwo'>& Orders</span>
        </div>

        <div className="navTab">
          <span className='navTabLnOne'>Your</span>
          <span className='navTabLnTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className="navCartIcon">
            <ShoppingCart />
            <span className='navTabLnTwo cartCounter'>{cart?.length}</span>
          </div>
        </Link>


      </div>
    </div>
  )
}

export default Navbar