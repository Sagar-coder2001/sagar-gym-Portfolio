import React from 'react'
import "./navbar.css"
import { useState } from 'react'

export default function Navbar() {
const [humberger, sethumberger] = useState(false);
const [login, setlogin] = useState(false);

const signinup = () =>{
    setlogin(!login)
}

const toggle = () =>{
    sethumberger(!humberger)
}
  return (
    <>
    <header>
        <nav>
            <div className='left'>
                <img src='https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg'></img>
            </div>
            <div className='middle' id={humberger ? "nav" : ""} >
            <div>
                <ul>
                    <li><a href='#'>Home</a></li> 
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Service</a></li>
                    <li><a href='#'>Gallery</a></li>
                    <li><a href='#'>Contact-us</a></li>
                </ul>
                </div>
                <i className="fa-solid fa-bars" onClick={toggle}></i>
            </div>
            <div className='right'>
                <button className='loginbtn' onClick={signinup}>Login</button>
            </div>
        </nav>
    </header>
    {/* login Form Start Here */}
    <div className="form-container" id={login ? "abc" : ""}>
        <h2>Login</h2>
        <form action=''>
        <div className='name-container'>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name'></input>
            </div>
            <div className='name-container'>
                <label htmlFor='Mob-no'>Mobile No: </label>
                <input type='number' id='mob-no'></input>
            </div>
            <div className='name-container'>
                <label htmlFor='email'>Email: </label>
                <input type='text' id='email'></input>
            </div>
            <div className='name-container'>
                <label htmlFor='pass'>Passsword: </label>
                <input type='password' id='pass'></input><br></br>
                <span className='forget-pass'><a href='#'>forget password</a></span>
            </div>
            <div className='login-container'>
                <button className='login' id='login'>Login</button>
                <button className='Sign-Up' id='Sign-Up'>Sign-Up</button>
            </div>
        </form>
    </div>
    </>
  )
}
