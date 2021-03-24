import React from "react"
import "./Row.css"
function Row({ img, title, features, reverse ,link}) {
   return (
      <div
         className={
            reverse ? "projects__container-clone" : "projects__container"
         }
      >
         <div className="projects__left">
            <img className="image" src={img} alt="" />
            <a href={link}>
               <button className="button">LIVE DEMO</button>
            </a>
         </div>
         <div className="projects__right">
            <h5 className="my-4 text-xl  italic	font-semibold	tracking-wide	">
               {title}
            </h5>
            <ul className="font-mono ...">
               {features?.map((feature) => (
                  <li>✭ {feature}</li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Row
