import React from 'react'
import './about.css'


export default function About() {
  return (
    <>
    <div className='about-container'>
        <h2>ABOUT JYM</h2>
      <div className='about'>
        <div className='about-left'>
            <img src='https://img.freepik.com/premium-photo/athletic-man-works-out-gym-with-fiery-barbell_207634-1525.jpg?ga=GA1.1.1318947987.1710155342&semt=ais_hybrid&w=740'></img>
        </div>
        <div className='about-right'>
            <h2>FITNESS CLUB</h2>
            <h3>Take care of your body. It's the only place you have to live.</h3>
            <p>At THE GYM, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul.</p>

        </div>
      </div>
    </div>
    </>
  )
}
