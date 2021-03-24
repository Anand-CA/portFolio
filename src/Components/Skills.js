import React from "react"
import "./Skills.css"
import skill from "./skill.json"
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import htmlanime from "./htmlanime.json"
import react from "./react.json"
function Skills({ id }) {
   return (
      <div className="skills" id={id}>
         <div className="skills__container">
            <div className="header__text">
               <h1 className="text-4xl">Skills</h1>
            </div>
            <div className="row">
               <div className="skills__container__left">
                  <div className="svg">
                     <Player autoplay loop src={htmlanime} />
                  </div>
               </div>
               <div className="skills__container__right">
                  <div className="skills__container__right__left">
                     <h5 className="text-xl font-sans ... italic	font-semibold">FronEnd Development</h5>
                     <ul className="font-mono ..."> 
                        <li>✭ HTML</li>
                        <li>✭ Css</li>
                        <li>✭ Javascript</li>
                     </ul>
                     <h5 className="text-xl font-sans ... italic	font-semibold">BackendDevelopment</h5>
                     <ul className="font-mono ...">
                        <li>✭ Nodejs</li>
                        <li>✭ Express</li>
                     </ul>
                  </div>
                  <div className="skills__container__right__right">
                  <h5 className="text-xl font-sans ... italic	font-semibold	">Frameworks</h5>

                     <ul className="font-mono ..."> 
                        <li>✭ Bootstrap</li>
                        <li>✭ React</li>
                        <li>✭ Material Ui</li>
                     </ul>
                     <h5 className="text-xl font-sans ... italic	font-semibold">Databases</h5>
                     <ul className="font-mono ...">
                        <li>✭ MongoDB</li>
                        <li>✭ Firebase</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Skills
