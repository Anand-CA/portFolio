import React, { useEffect, useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"

function Navbar() {
   const [IsVisible, setIsVisible] = useState(false)
   const scrollToTop = () => {
      scroll.scrollToTop()
   }
   const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
         setIsVisible(true)
      } else {
         setIsVisible(false)
      }
   }
   useEffect(() => {
      window.addEventListener("scroll", toggleVisibility)
   }, [])
   return (
      <div className="nav">
         <div className="nav-content">
            <div className="nav-content__left">
               <p onClick={scrollToTop}>{"<Anand>"}</p>
            </div>
            <div className="nav-content__right">
               <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
               >
                  Home
               </Link>
               <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
               >
                  Skills
               </Link>
               <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
               >
                  Projects
               </Link>
               <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
               >
                  Contact
               </Link>
               {IsVisible ? (
                  <a className="scroll__button" onClick={scrollToTop}>
                     <img className="scroll__image" src="scroll.png" alt=""/>
                  </a>
               ) : (
                  ""
               )}
            </div>
         </div>
      </div>
   )
}

export default Navbar
