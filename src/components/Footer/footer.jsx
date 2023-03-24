import React from 'react';
import './footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.jpg'

const Footer = () => {
   return(
      <div className="footer-container">
         <hr id="hr-footer" />
         <span>CHECK OUT </span>
         <span className="stroke-text-white">OUR SOCIAL MEDIA:</span>
         <div className="social-media">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
         </div>
         <div className="logo-footer">
            <img src={Logo} alt="" />
         </div>
      </div>
   )
}

export default Footer