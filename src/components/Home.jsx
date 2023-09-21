import React from "react";
import InProgress from "../assets/5695859.png";
import "./home.css";

const Home = () => {
  return (
    <div className="body-home">
      <div class="home">
        <div className="home-inprogress">
          <img alt="Home en progreso" src={InProgress} class="homeInProgress" />
        </div>
        <div className="home-title">
          <h1 class="title">House Of Dev</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
