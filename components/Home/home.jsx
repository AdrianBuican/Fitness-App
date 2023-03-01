import React from 'react'
import './home.css'
import Header from '../Header/Header.jsx'
import Heart from '../../assets/heart.png'
import Stripes from '../../assets/stripes.png'
import Calories from '../../assets/calories.png'
import FitGuy from '../../assets/fit-guy.png'
import FitGal from '../../assets/fit-gal.png'

const Home = () => {
   return(
      <div className="home">
         <div className="home-left">
            <Header/>
            {/* The best ad */}
            <div className="ad">
               <div></div>
               <span>The Only Fitness App You Need</span>
            </div>

         {/* Hero Heading */}
            <div className="home-text">
               <div>
                  <span className="stroke-text">SCULPT </span>
                  <span>Your Body </span>
                  <div>Like a Greek Statue</div>
               </div>
               <div className="home-subtitle">
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
            <div className="home-buttons">
               <button className="btn">Start Now</button>
               <button className="btn">Learn More</button>
            </div>
         </div>

         <div className="home-right">
            <button className="btn">Join Now</button>
            <div className="heart-rate">
               <img src={Heart}/>
               <span>Heart Rate</span><span>124 BPM</span>
            </div>

            {/* Fit images */}
            <img src={FitGuy} className="fit-guy"/>
            <img src={Stripes} className="stripes"/>
            <img src={FitGal} className="fit-gal"/>
            {/* kcal */}
            <div className="calories">
               <img src={Calories}/>
               <div> You burned:
                  <div>478</div><span>kcal</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
