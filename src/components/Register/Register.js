import { useState } from 'react'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import '../SignIn/SignIn.css'

const Register = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = event => {
    event.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="signIn">
      <Link to='/'>
        <img className='signInImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazonLogo" />
      </Link>

      <div className="signInCont">
        <h1>Create account</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input
            type="password"
            placeholder=' At least 6 characters'
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <button className='signInBtn' type='submit' onClick={register}>Create Account</button>
        </form>

        <p>
          By creating an account, you agree to the fakeAmazon's Conditions of Use and Privacy Notice.
        </p>

        <button className='registerBtn' onClick={e => navigate('/signin')}>Already have an account? Sign-In</button>

      </div>
    </div>
  )
}

export default Register