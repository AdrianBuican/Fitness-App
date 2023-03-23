import React from 'react'
import {useState} from 'react'
import './testimonials.css'
import {testimonialsData} from '../../data/testimonialsData.js'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import testimonialAnimation from './testimonialAnimation.js'
import LetterSwap2 from './letterSwapTestimonials.js'

const Testimonials = () => {
   const [selected, setSelected] = useState(0);
   const tLength = testimonialsData.length;

   return(
      <>
      <div className="stroke-text-orange testim-title">TESTIMONIALS</div>
      <div className="testim">
         <div className="testim-left">
            <span>WHAT PEOPLE SAY ABOUT </span>
            <span className="persimmon-text">i<span className="orange-text" id="sculpt2" onMouseOver={LetterSwap2}>Sculpt</span></span>
            <span className="customer-reviews" id="review">
               {testimonialsData[selected].review}
            </span>
            <span className="customer-reviews">
               <span className="testim-name">
                  {testimonialsData[selected].name + " "} 
               </span>
               - {testimonialsData[selected].status}
            </span>
         </div>

         <div className="testim-right">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="image" className="testim-image"/>
            <div className="arrows">
               <img 
               onClick= {() =>{
                  selected===0
                  ? setSelected(tLength -1)
                  : setSelected((prev) => prev-1);
                  testimonialAnimation()
                  }}
               src={leftArrow} alt="Left Arrow" className="left-arrow"/>

               <img 
               onClick = {() => {
                  selected === tLength -1
                  ? setSelected(0)
                  : setSelected((prev) => prev+1);
                  testimonialAnimation()
               }}
               src={rightArrow} alt="Right Arrow" className="right-arrow" />
            </div>
         </div>
      </div>
      <br></br><br></br><hr></hr><br></br>
      </>
   )
}

export default Testimonials
