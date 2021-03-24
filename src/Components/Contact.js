import React, { useState } from "react"
import "./Contact.css"
import emailjs from "emailjs-com"
import { store } from "react-notifications-component"
import { Alert } from "@material-ui/lab"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons"

function Contact({ id }) {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")

   //send email
   const handleSubmit = (e) => {
      e.preventDefault()

      let templateParams = {
         from_name: email,
         to_name: "densecop1@gmail.com",
         message: message,
      }
      emailjs
         .send(
            "service_7fhuo1r",
            "template_umk1w6g",
            templateParams,
            "user_3FtBIL6zGpuOqh9K9qFwD"
         )
         .then(
            function (response) {
               toast.info("Form Submitted Sucessfully 👍", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
               })
               console.log("SUCCESS!👍", response.status, response.text)
            },
            function (error) {
               console.log("FAILED...😡", error)
            }
         )
   }
   const notify = (e) => {
      e.preventDefault()
   }
   return (
      <div className="contact " id={id}>
         <div className="contact__container">
            <ToastContainer />
            <h1>Contact Form</h1>
            <form className="contact__form">
               <div className="name">
                  <label>Name</label>
                  <input
                     placeholder="Name"
                     onChange={(e) => setName(e.target.value)}
                     type="text"
                     value={name}
                  />
               </div>
               <div className="email">
                  <label className="label">Email</label>
                  <input
                     placeholder="Email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     type="text"
                  />
               </div>
               <div className="message">
                  <label className="label">Message</label>
                  <textarea
                     onChange={(e) => setMessage(e.target.value)}
                     value={message}
                     placeholder="Write something.."
                  ></textarea>
               </div>
               <button onClick={handleSubmit} type="submit">
                  Submit
               </button>
            </form>
            <div className="footer">
               <IconContext.Provider value={{ className: "fontawesome__icon" }}>
                  <a href="https://github.com/densec?tab=repositories">
                     <FaGithub size={56} />
                  </a>
                  <a href="https://www.linkedin.com/in/anand-ca-a58471191/">
                     <FaLinkedin size={56} />
                  </a>
               </IconContext.Provider>
            </div>
         </div>
      </div>
   )
}

export default Contact
