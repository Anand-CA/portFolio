import React, { Component } from "react"
import "./App.css"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Section from "./Components/Section"
import Skills from "./Components/Skills"
import dummyText from "./DummyText"
import toast, { Toaster } from "react-hot-toast"
import ReactNotifications from "react-notifications-component"
import { store } from "react-notifications-component"

const notify = () => toast("Here is your toast.")
class App extends Component {
   render() {
      return (
         <div className="App">
           <ReactNotifications />
            <Navbar />
            <Toaster />
            <Home id="section1" />
            <Skills id="section2" />
            <Projects id="section3" />
            <Contact id="section4" />
         </div>
      )
   }
}

export default App
