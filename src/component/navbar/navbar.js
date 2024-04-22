import React from 'react'
import "./navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
const [humberger, sethumberger] = useState(false);

const toggle = () =>{
    sethumberger(!humberger)
}
  return (
    <>
    <header>
        <nav>
            <div className='left'>
            <Link to = '/'><img src='https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg'></img></Link>
            </div>
            <div className='middle' id={humberger ? "nav" : ""} >
            <div>
                <ul>
                    <Link to = '/'><li><a href='#'>Home</a></li></Link>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Service</a></li>
                    <li><a href='#'>Gallery</a></li>
                    <li><a href='#'>Contact-us</a></li>
                </ul>
                </div>
                <i className="fa-solid fa-bars" onClick={toggle}></i>
            </div>
            <div className='right'>
                <Link to = '/loginform'>
                <button className='loginbtn'>SignUp</button>
                </Link>
            </div>
        </nav>
    </header>
    </>
  )
}
