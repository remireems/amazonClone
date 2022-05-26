
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()
    // firebase sign in stuff
  }

  const register = e => {
    e.preventDefault()
    // firebase register stuff
  }

  return (
    <div className="signIn">
      <Link to='/'>
        <img className='signInImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazonLogo" />
      </Link>

      <div className="signInCont">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input 
          type="text"
          value={email} 
          onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)} />

          <button className='signInBtn' type='submit' onClick={signIn}>Sign In</button>
        </form>

        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <button className='signInRegisterBtn' onClick={register}>Create your amazon account</button>

      </div>

    </div>
  )
}

export default SignIn