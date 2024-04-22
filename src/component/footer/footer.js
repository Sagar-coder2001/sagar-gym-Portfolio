import React from 'react'
import './footer.css'

export default function Footer() {
  return (
   <>
   <div className='footer-container'>
    <h2>FOOTER</h2>
    <div className='footer'>
      <div className='myfooter'>
        <img src='https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg'></img>
        <p>At THE GYM, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs,</p>
      </div>
      <div className='myfooter'>
        <h2>COMPANY</h2>
        <p>Buisness</p>
        <p>Franchise</p>
        <p>Parternship</p>
        <p>Network</p>
      </div>
      <div className='myfooter'>
        <h2>ABOUT-US</h2>
        <p>Blogs</p>
        <p>Security</p>
        <p>Careers</p>
      </div>
      <div className='myfooter'>
        <h2>CONTACT-US</h2>
        <form action=''>
         {/* <input type='text' id='mail' placeholder='Your Email'></input> */}
        </form>
      </div>
    </div>
   </div>
   </>
  )
}
