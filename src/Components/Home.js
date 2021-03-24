import React from "react";
import "./Home.css";
import emoji from 'react-easy-emoji'
import Lottie from "react-lottie-player";
import man from "./man.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Home({ id }) {
  return (
    <div className="home" id={id}>
      <div className="home__container">
        <div className="home__left animate__animated animate__fadeInDown">
          <h1 className="text-white	 animate__animated animate__bounce animate__delay-1s">Hi I'm Anand <span className="wave-emoji">{emoji("👋")}</span></h1>
          <h1 className=" text-green-400 animate__animated animate__flash	animate__delay-1s middle-text">A Passionate</h1>
          <h1 className="text-red-400	">Web Developer</h1>
        </div>
        <div className="home__right animate__animated animate__fadeInRight">
          <Player
            autoplay
            loop
            src={man}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
