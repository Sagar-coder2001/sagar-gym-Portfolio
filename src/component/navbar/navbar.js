import React from 'react'
import "./navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
    <header>
        <nav>
            <div className='left'>
            <Link to = '/'><img src='https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg'></img></Link>
            </div>
            <div className='middle' >
            <div>
                    <span style={{fontSize:'25px', color:'white', textDecoration:'none',  textShadow: "10px 10px 15px crimson"}}>FITNESS CLUB</span>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}
