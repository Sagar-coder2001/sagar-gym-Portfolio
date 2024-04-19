import React from 'react'
import "./LoginForm.css"

export default function LoginForm({ onLogin }) {
  return (
    <div>
        <div className="form-container">
      <h2>Sign Up</h2>
      <form action="">
        <div className='name-container'>
          <input type='text' id='name'placeholder='Your Name'></input>
        </div>
        <div className='name-container'>
          <input type='tel' id='mob-no'placeholder='Your Mob No'></input>
        </div>
        <div className='name-container'>
          <input type='text' id='email'placeholder='Your Email'></input>
        </div>
        <div className='name-container'>
          <input type='password' id='pass'placeholder='Your password'></input><br></br>
        </div>
        <div className='login-container'>
          <button className='login' id='login' onClick={onLogin}>Sign Up</button>
        </div>
      </form>
    </div>
      
    </div>
  )
}
