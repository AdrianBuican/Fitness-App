import React from 'react'
import './Hero.css'
import Header from '../Header/Header.jsx'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
   return(
      <div className="hero">
         <div className="left-h">
            <Header/>
            {/* The best ad */}
            <div className="the-best-ad">
               <div></div>
               <span>The Only Fitness App You Need</span>
            </div>

         {/* Hero Heading */}
            <div className="hero-text">
               <div>
                  <span className="stroke-text">SCULPT </span>
                  <span>Your Body </span>
                  <div>Like a Greek Statue</div>
               </div>
               <div className="hero-subtitle">
                  We'll help you reach your ideal shape & enjoy life to the fullest!
               </div>
            </div>

            {/* Figures */}
            <div className="figures">
               <div>
                  <span>100+</span>
                  <span>Advanced Coaches</span>
               </div>
               <div>
                  <span>10K+</span>
                  <span>Members</span>
               </div>
               <div>
                  <span>50+</span>
                  <span>Custom Workouts</span>
               </div>
            </div>

            {/* Buttons */}
            <div className="hero-buttons">
               <button className="btn">Start Now</button>
               <button className="btn">Learn More</button>
            </div>
         </div>

         <div className="right-h">
            <button className="btn">Join Now</button>
            <div className="heart-rate">
               <img src={Heart}/>
               <span>Heart Rate</span><span>116 BPM</span>
            </div>

            {/* Hero images */}
            <img src={hero_image} className="hero-image"/>
            <img src={hero_image_back} className="hero-image-back"/>

            {/* kcal */}
            <div className="calories">
               <img src={Calories}/>
               <div> Hover to check how many kcal you can burn with our:
                  <div>Novice Workout:
                     <span className="letter-swap"> ???</span><span> kcal burned</span>
                  </div>
                  <div>Intermediate Workout:
                     <span className="letter-swap"> ???</span><span> kcal burned</span>
                  </div>
                  <div>Advanced Workout:
                     <span className="letter-swap"> ???</span><span> kcal burned</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
