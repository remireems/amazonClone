import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <Link to='/'>
        <img className='navLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo" />
      </Link>

      <ul className='footerUL'>
        <li>Conditions of Use</li>
        <li>Privacy Notice</li>
        <li>© 1996-2022, fakeAmazon.com, Inc. or its affiliates</li>
      </ul>
    </div>
  )
}

export default Footer