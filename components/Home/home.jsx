import React from 'react'
import './home.css'
import Header from '../Header/header.jsx'
import Stripes from '../../assets/stripes.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import FitGuy from '../../assets/fit-guy.png'
import FitGal from '../../assets/fit-gal.png'
import LetterSwap from './letterSwap.js'

const Home = () => {
   return(
      <div className="home">
         <div className="home-left">
            <Header/>
         {/* Hero Heading */}
            <div className="home-text">
               <div className="home-text-title">
                  <div id="sculpt" onMouseOver={LetterSwap}>SCULPTING</div>
                  <span> Your Body </span>
                  <div>Like a Greek Statue</div>
               </div>
               <div className="home-text-subtitle">
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
               <img src={Heart} alt="Heart Image" className="heart" />
               <span>Heart Rate</span><span>115 BPM</span>
            </div>

            {/* Fit images */}
            <img src={FitGuy} className="fit-guy" alt="Fit Guy"/>
            <img src={Stripes} className="stripes" alt="Orange Stripes"/>
            <img src={FitGal} className="fit-gal" alt="Fit Girl"/>
            {/* Calories */}
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
