import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteCheck from '../../assets/whiteCheck.png'

const Plans = () => {
   return (
      <>
      <div className="plans-container">
         <div className="workouts-header">
            <span>CHECK OUT OUR</span>
            <span className="stroke-text-orange">PLANS</span>
         </div>
         

         {/* Plan Cards */}
         <div className="plans">
            {plansData.map((plan, i) =>
            (
               <div className ="plan" key={i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span>${plan.price}</span>

                  <div className="features">
                     {plan.features.map((feature, i) => 
                     (
                        <div className="feature" key={i}>
                           <img src={whiteCheck} alt="Check" />
                           <span>{feature}</span>
                        </div>
                     ))}
                  </div>

                  <div>
                     <span>And Much More</span>
                  </div>
                  <button className="btn plan-btn">Join Now</button>
               </div>
            ))}
         </div>
      </div>
      <hr></hr>
      </>
   )
}

export default Plans
