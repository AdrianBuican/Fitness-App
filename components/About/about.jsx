import React from 'react'
import './About.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import Check from '../../assets/check.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const About = () => {
   return(
      <>
      <hr></hr>
      <div className="about-introduction">
         <span>WHAT YOU SHOULD KNOW</span>
         <span className="stroke-text"> ABOUT US</span>
      </div>
      <div className="About" id="about">
         <div className="about-left">
            <img src={image1} alt="" className="img1" />
            <img src={image2} alt="" className="img2" />
            <img src={image3} alt="" className="img3" />
            <img src={image4} alt="" className="img4" />
            <img src={image5} alt="" className="img5" />
         </div>

         <div className="about-right">
            <div className="about-details">
               <div>
                  <img src={Check} alt=""/>
                  <span>WE PROVIDE BEGINNER PROGRAMS 100% FOR FREE</span>
               </div>
               <div>
                  <img src={Check} alt=""/>
                  <span>WE HAVE OVER 100 EXPERT COACHES </span>
               </div>
               <div>
                  <img src={Check} alt=""/>
                  <span>OUR TOP PROGRAMS ARE AFFORDABLE FOR ANYONE</span>
               </div>
               <div>
                  <img src={Check} alt=""/>
                  <span>WE HAVE A MONEY-BACK-GUARANTEE POLICY WITH NO QUESTIONS ASKED</span>
               </div>
               <div>
                  <img src={Check} alt=""/>
                  <span>WE HAVE THE MOST RELIABLE PARTNERS</span>
               </div>
               <div>
                  <img src={Check} alt=""/>
                  <span>OUR TESTIMONIALS SPEAK FOR THEMSELVES</span>
               </div>
               <div>
                  <img src={Check} alt=""/>
                  <span>HERE YOU'LL FIND THE MOST POSITIVE AND SUPPORTING COMMUNITY</span>
               </div>
               <span className="partners">OUR PARTNERS:</span>
               <div className="partners-img">
                  <img src={nb} alt="" />
                  <img src={adidas} alt="" />
                  <img src={nike} alt="" />
               </div>
   
            </div>
         </div>
      </div>
      <hr></hr>
      </>
   )
}

export default About
