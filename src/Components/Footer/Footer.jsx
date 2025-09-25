import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'> 
    <div className="footer-container">
        <div className="footer-content-left"> 
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore explicabo eum a alias ipsa aspernatur aperiam sed eveniet, quasi, vero sint! Totam optio consequuntur consequatur distinctio corporis? Reiciendis, sint corrupti!</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>   
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li> 
            <li>privacy policy</li>
            </ul>
       
           </div>
           
         <div className="footer-content-Right"> 
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+92 323-3345543</li>
                <li>Contact@tamato.com</li>
            </ul>
         </div>
          
    </div>
      <p className='footer-copy-right'> Copyright 2025 @ tamato.com - All Right Reseaved.</p>
    </div>
  )
}

export default Footer
