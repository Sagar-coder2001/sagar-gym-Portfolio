import React from 'react'
import "./navbar.css"
import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm';

export default function Navbar() {
const [humberger, sethumberger] = useState(false);
const [login, setlogin] = useState(false);

const signUp = () =>{
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
                <button className='loginbtn' onClick={signUp}>SignUp</button>
            </div>
        </nav>
    </header>
    {login && <LoginForm onLogin={signUp} />}
    </>
  )
}
