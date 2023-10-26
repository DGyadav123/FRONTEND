import React from 'react'
import './CSS/loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsigup-fields">
            <input type="text" placeholder="Your Name"/>
            <input type="Email" placeholder='EmailAddress' />
            <input type="password" placeholder='Password'/>

          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="cheackbox" name='' id='' />
            <p>By continuing ,I agree to the terms of use & pricvacy police.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
