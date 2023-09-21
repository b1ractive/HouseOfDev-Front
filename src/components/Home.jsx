import React from "react";
import LogoP5 from "../assets/p5.png";
import InProgress from "../assets/5695859.png";
import "./home.css";

const Home = () => {
  return (
    <div className="body-home">
      <div class="home">
        <div className="home-inprogress">
          <img alt="Home en progreso" src={InProgress} class="homeInProgress" />
        </div>
        {/* <div>
          <img alt="Logo de p5" src={LogoP5} class="homeLogoP5" />
        </div> */}
        <div className="home-title">
          <h1 class="title">House Of Dev</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
