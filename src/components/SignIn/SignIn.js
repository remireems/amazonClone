import { useState } from 'react'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = event => {
    event.preventDefault()
    // firebase sign in
    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert('There is no account with that email address! Please create a new account.'))
  }

  return (
    <div className="signIn">
      <Link to='/'>
        <img className='signInImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazonLogo" />
      </Link>

      <div className="signInCont">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <button className='signInBtn' type='submit' onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing in, you agree to the fakeAmazon's Conditions of Use and Privacy Notice.
        </p>

        <button className='registerBtn' onClick={e => navigate('/register')}>Create your Amazon account</button>

      </div>
    </div>
  )
}

export default SignIn