import React from 'react'
import './workouts.css'
import {programsData} from '../../data/programsData.js'
import RightArrow from '../../assets/rightArrow.png'

const Workouts = () =>{
   return(
      <>
         <hr/>
         <div className="workouts" id="workouts">
            {/* Header */}
            <div className="workouts-header">
               <span>EXPLORE OUR </span>
               <span className="stroke-text-orange">WORKOUTS </span>
            </div>

            {/* Program Categories */}
            <div className="workouts-categories">
               {programsData.map((program) => (
                  <div className="category">
                     <span>{program.image}</span>
                     <span>{program.details}</span>
                     <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow}/>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="hr-container">
            <hr className=""/>
         </div>
      </>
   )
}

export default Workouts