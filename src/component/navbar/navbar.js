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
                    <span style={{fontSize:'25px', color:'white', textDecoration:'none',  textShadow: "10px 10px 15px crimson"}}>Earth Fitness</span>
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
