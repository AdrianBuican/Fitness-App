import React from 'react';
import './header.css';
import Logo from '../../assets/logo.jpg'

const Header = () => {
   return(
      <>
      <div className="header">
         <img src={Logo} className="logo" alt="Logo"/>
         <ul className="header-menu">
            <li>Home</li>
            <li>Workouts</li>
            <li>About Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
         </ul>
      </div>
      </>
   )
}

export default Header
