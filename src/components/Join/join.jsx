import React, {useRef} from 'react'
import './join.css'
// import emailjs from '@emailjs/browser'

const Join = () => {
   const form = useRef()

   return(
      <div className="join" id="join-us">
         <div className="join-left">
            <div>
               READY TO
            </div>
            <div className="stroke-text-white">
               LEVEL UP YOUR BODY?
            </div>
         </div>

         <div className="join-right">
            <form ref={form} className="email-container">
               <input type="email" name="user_email" placeholder="Enter your e-mail address"/>
               <button className="btn btn-join">
                  Join Now
               </button>
            </form>
         </div>
      </div>
   )
}

export default Join